import Article from '../interfaces/article';
import Text from './common/Text';
import Tags from './common/Tags';
import { useThemeState } from '../theme/ThemeContext';
import Markdown from './Markdown';
import Authors from './Authors';
import { getUrlWithUtmTrackingParams } from '../utils';

const ArticleItem = ({ article }: { article: Article }): JSX.Element => {
  const theme = useThemeState();
  const { title, desc, url, authors, tags } = article;

  const articleUrlWithTrackingParams = getUrlWithUtmTrackingParams({ url });

  return (
    <div className="mt-0 mx-0 py-4" key={url}>
      <a href={articleUrlWithTrackingParams} target="_blank" rel="noreferrer">
        <Text size="2xl" as="h4" color={`text-${theme}-600`} additionalStyles="hover:underline">
          {title}
        </Text>
      </a>
      <Text size="md" as="div" additionalStyles="py-2">
        <Markdown>{desc}</Markdown>
      </Text>
      <Authors authors={authors} />
      <Tags tags={tags} />
    </div>
  );
};

export default ArticleItem;
