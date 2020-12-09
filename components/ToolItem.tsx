import Image from 'next/image';
import ArticleItem from './ArticleItem';
import Tool from '../interfaces/tool';

const ToolItem = ({ tool: { title, url, logo, author, desc, tags } }: { tool: Tool }): JSX.Element => (
  <div className="flex flex-wrap sm:flex-no-wrap flex-row items-center">
    <a
      href={url}
      className="w-full mr-8 max-w-fc my-4 p-1 shadow-lg rounded-full transform transition duration-700 hover:scale-105 hover:shadow-md"
      target="_blank"
      rel="noreferrer"
      aria-label={title}
    >
      <Image
        className="h-32 w-32 rounded-full inline object-contain p-2 self-center"
        width={120}
        height={120}
        alt={title}
        src={logo}
      />
    </a>
    <ArticleItem article={{ title, url, desc, author, tags }} />
  </div>
);

export default ToolItem;
