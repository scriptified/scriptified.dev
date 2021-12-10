import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Quiz, { Option as OptionType } from '../interfaces/quiz';
import { CheckCircleIcon, XCircleIcon } from './icons/icons';
import Button from './common/Button';
import CodeSnippet from './common/CodeSnippet';
import Text from './common/Text';
import { useThemeState } from '../theme/ThemeContext';
import Markdown from './Markdown';

const QuizComponent = ({ quiz }: { quiz: Quiz }): JSX.Element => {
  const [currentOption, setOption] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const theme = useThemeState();
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady && router.query.section === 'quiz' && typeof router.query.option === 'string') {
      const option = parseInt(router.query.option);
      if (typeof option === 'number' && option > 0 && option < 5) {
        setOption(option);
      }
    }
  }, [router.isReady, router.query.option, router.query.section]);

  const hasSelectedCorrectOption = selectedOptions.includes(quiz.answerId);

  const handleSubmit = () => {
    setSelectedOptions(oldOptions =>
      currentOption && !oldOptions.includes(currentOption) ? [...oldOptions, currentOption] : oldOptions
    );
  };

  return (
    <div>
      <Text as="h4" size="2xl" color={`text-${theme}-600`} additionalStyles="pt-4">
        {quiz.question}
      </Text>
      {quiz.snippet && <CodeSnippet snippet={quiz.snippet} />}
      {quiz.options.map(option => (
        <Option
          isSelected={currentOption === option.id}
          isDisabled={hasSelectedCorrectOption}
          isShowingDetailView={selectedOptions.includes(option.id)}
          option={option}
          key={option.id}
          isCorrectAnswer={quiz.answerId === option.id}
          onSelect={setOption}
        />
      ))}
      <div className="flex justify-center w-full">
        <Button type="primary" size="xl" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

const Option = ({
  isSelected,
  isDisabled,
  isShowingDetailView,
  option,
  onSelect,
  isCorrectAnswer,
}: {
  isSelected: boolean;
  isDisabled: boolean;
  isShowingDetailView: boolean;
  option: OptionType;
  onSelect: (id: number) => void;
  isCorrectAnswer: boolean;
}): JSX.Element => {
  const theme = useThemeState();

  // Colors for options for its different states

  const DEFAULT_BACKGROUND = `bg-gradient-to-br from-${theme}-100 to-${theme}-200`;
  const DEFAULT_BORDER = `border-${theme}-300`;

  const CORRECT_ANSWER_BACKGROUND = `bg-gradient-to-br from-green-100 to-green-300 transition-none transform-none`;
  const CORRECT_ANSWER_BORDER = `border-green-700`;

  const WRONG_ANSWER_BACKGROUND = 'bg-gradient-to-br from-red-100 to-red-300 transition-none transform-none';
  const WRONG_ANSWER_BORDER = 'border-red-700';

  const HIGHLIGHTED_BORDER = `border-${theme}-600 bg-gradient-to-br from-${theme}-200 to-${theme}-400`;
  // const HIGHLIGHTED_BACKGROUND = `bg-${theme}-300`;
  // eslint-disable-next-line max-len
  const HOVER_BORDER = `hover:border-${theme}-600 hover:bg-gradient-to-br hover:from-${theme}-100 hover:to-${theme}-300`;

  const answeredBackground = isCorrectAnswer ? CORRECT_ANSWER_BACKGROUND : WRONG_ANSWER_BACKGROUND;
  const answeredBorder = isCorrectAnswer ? CORRECT_ANSWER_BORDER : WRONG_ANSWER_BORDER;

  const normalBorder = isSelected ? HIGHLIGHTED_BORDER : DEFAULT_BORDER;
  // const normalBackground = isSelected ? HIGHLIGHTED_BACKGROUND : DEFAULT_BACKGROUND;

  const background = isShowingDetailView ? answeredBackground : DEFAULT_BACKGROUND;
  const border = isShowingDetailView ? answeredBorder : normalBorder;
  const additionalStyles = !(isDisabled || isShowingDetailView)
    ? `cursor-pointer ${HOVER_BORDER} transition-all transform ease-in-out duration-500 hover:scale-105 focus:scale-105`
    : '';

  const handleSelect = () => {
    if (!isDisabled) {
      onSelect(option.id);
    }
  };

  return (
    <div
      // eslint-disable-next-line max-len
      className={`relative py-8 px-10 rounded mb-8 border-2 ${background} ${border} ${additionalStyles}`}
      onClick={handleSelect}
      tabIndex={0}
    >
      {isShowingDetailView && (
        <>
          {isCorrectAnswer ? (
            <CheckCircleIcon color="text-green-500 absolute top-1/2 left-1" />
          ) : (
            <XCircleIcon color="text-red-500 absolute top-1/2 left-1" />
          )}
        </>
      )}
      <Text size="md" as="div" color={`text-${theme}-900`} additionalStyles="pl-2">
        <Markdown>{option.text}</Markdown>
      </Text>
      {isShowingDetailView && (
        <Text size="sm" as="div" color={`text-${theme}-800`} additionalStyles="mt-2 pl-2">
          <Markdown>{option.description}</Markdown>
        </Text>
      )}
    </div>
  );
};

export default QuizComponent;
