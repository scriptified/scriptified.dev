import Article from '../interfaces/article';
import Text from './common/Text';
import Tags from './common/Tags';

const ArticleItem = ({ article: { title, desc, url, author, tags } }: { article: Article }): JSX.Element => (
  <div className="mt-0 mx-0 py-4" key={url}>
    <a href={url}>
      <Text type="h3" color="green-5" inline additionalStyles="hover:underline">
        {title}
      </Text>
    </a>
    <Text type="base" additionalStyles="my-2">
      {desc}
    </Text>
    <Text type="small" color="gray-6">
      by {author}
    </Text>
    <span>
      <Tags tags={tags} />
    </span>
  </div>
);

export default ArticleItem;
