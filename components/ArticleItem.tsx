import Article from '../interfaces/article';
import Text from './common/Text';
import Tags from './common/Tags';
import { useThemeState } from '../theme/ThemeContext';
import Markdown from './Markdown';

const ArticleItem = ({ article: { title, desc, url, author, tags } }: { article: Article }): JSX.Element => {
  const theme = useThemeState();
  return (
    <div className="mt-0 mx-0 py-4" key={url}>
      <a href={url} target="_blank" rel="noreferrer">
        <Text type="h3" color={`text-${theme}-600`} inline additionalStyles="hover:underline">
          {title}
        </Text>
      </a>
      <Text type="base" additionalStyles="my-2">
        <Markdown>{desc}</Markdown>
      </Text>
      <Text type="small" color="text-gray-600" additionalStyles="mb-2">
        by <span className="uppercase">{author}</span>
      </Text>
      <span>
        <Tags tags={tags} />
      </span>
    </div>
  );
};

export default ArticleItem;
