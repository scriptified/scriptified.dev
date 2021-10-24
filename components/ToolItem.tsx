import Image from 'next/image';
import ArticleItem from './ArticleItem';
import Tool from '../interfaces/tool';

const ToolItem = ({ tool: { title, url, logo, authors, desc, tags } }: { tool: Tool }): JSX.Element => {
  const article = { title, url, desc, authors, tags };

  return (
    <div className="flex flex-wrap sm:flex-nowrap flex-row items-center">
      <a
        href={url}
        className="w-full mr-8 max-w-fc my-4 p-1 transform transition duration-700 hover:scale-105 img-shadow-sm hover:img-shadow-none"
        target="_blank"
        rel="noreferrer"
        aria-label={title}
      >
        <Image
          className="h-32 w-32 inline rounded object-contain p-2 self-center"
          width={120}
          height={120}
          alt={title}
          src={logo}
        />
      </a>
      <ArticleItem article={article} />
    </div>
  );
};

export default ToolItem;
