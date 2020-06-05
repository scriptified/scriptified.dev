import Article from '../interfaces/article';

const ArticleItem = ({ article: { title, desc, url, author } }: { article: Article }) => (
  <div className="mt-0 mx-0" key={url}>
    <a href={url}>
      <a className="text-green-600 font-nunito font-semibold text-xl no-underline hover:underline">{title}</a>
    </a>
    <br />
    <p className="font-nunito text-base my-2">{desc}</p>
    <small className="font-nunito text-gray-600 text-sm">{author}</small>
  </div>
);

export default ArticleItem;
