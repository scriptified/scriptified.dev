import Article from '../interfaces/article';
import Text from './common/Text';

const ArticleItem = ({ article: { title, desc, url, author } }: { article: Article }) => (
  <div className="mt-0 mx-0 py-4" key={url}>
    <a href={url}>
      <Text type="h3" color="green-5" additionalStyles="hover:underline">
        {title}
      </Text>
    </a>
    <Text type="base" additionalStyles="my-2">
      {desc}
    </Text>
    <Text type="small" color="gray-5">
      {author}
    </Text>
  </div>
);

export default ArticleItem;
