import React from 'react';
import Quiz, { Option as OptionType } from '../interfaces/quiz';
import Text from './common/Text';
import CodeSnippet from './common/CodeSnippet';
import Button from './common/Button';

const QuizComponent = ({ quiz }: { quiz: Quiz }): JSX.Element => {
  const onSelect = (id: number) => {
    console.log(id);
  };
  const [selectedOption, setOption] = React.useState(0);

  return (
    <div>
      <Text type="h3" color="black-0" additionalStyles="mt-2">
        {quiz.question}
      </Text>
      {quiz.snippet && <CodeSnippet snippet={quiz.snippet} />}
      {quiz.options.map(option => (
        <Option
          isSelected={true}
          isDisabled={false}
          isShowingDetailView={false}
          option={option}
          key={option.id}
          onSelect={onSelect}
        />
      ))}
      <div className="flex justify-center w-full">
        <Button type="primary" size="lg">
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
}: {
  isSelected: boolean;
  isDisabled: boolean;
  isShowingDetailView: boolean;
  option: OptionType;
  onSelect: (id: number) => void;
}): JSX.Element => {
  return (
    <div className="py-8 px-10 rounded bg-gray-200 mb-8 border-2 border-gray-200 cursor-pointer hover:border-green-600">
      <Text type="base" color="black-0">
        {option.text}
      </Text>
    </div>
  );
};

export default QuizComponent;
