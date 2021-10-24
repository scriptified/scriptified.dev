import Article from '../interfaces/article';
import Text from './common/Text';
import Tags from './common/Tags';
import { useThemeState } from '../theme/ThemeContext';
import Markdown from './Markdown';
import Authors from './Authors';

const ArticleItem = ({ article }: { article: Article }): JSX.Element => {
  const theme = useThemeState();
  const { title, desc, url, authors, tags } = article;

  return (
    <div className="mt-0 mx-0 py-4" key={url}>
      <a href={url} target="_blank" rel="noreferrer">
        <Text type="h2" color={`text-${theme}-600`} inline additionalStyles="hover:underline">
          {title}
        </Text>
      </a>
      <Text type="base" additionalStyles="py-2">
        <Markdown>{desc}</Markdown>
      </Text>
      <Authors authors={authors} />
      <Tags tags={tags} />
    </div>
  );
};

export default ArticleItem;
