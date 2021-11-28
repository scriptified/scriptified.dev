import Text from './common/Text';
import Markdown from './Markdown';
import Authors from './Authors';
import TipOfTheWeek from '../interfaces/tipOfTheWeek';
import CodeSnippet from './common/CodeSnippet';

const TipOfTheWeekItem = ({ tipOfTheWeek }: { tipOfTheWeek: TipOfTheWeek }): JSX.Element => {
  const { snippet, desc, authors } = tipOfTheWeek;

  return (
    <div className="mt-0 mx-0 py-4">
      <Text size="md" as="div" additionalStyles="py-4 relative z-10">
        <Markdown>{desc}</Markdown>
      </Text>
      {snippet ? <CodeSnippet snippet={snippet} /> : null}
      <Authors authors={authors} />
    </div>
  );
};

export default TipOfTheWeekItem;
