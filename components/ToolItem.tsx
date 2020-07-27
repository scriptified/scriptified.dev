import Tool from '../interfaces/tool';
import ArticleItem from './ArticleItem';

const ToolItem = ({ tool: { title, url, logo, author, desc, tags } }: { tool: Tool }): JSX.Element => (
  <div className="flex flex-row items-center">
    <a href={url} className="w-full mr-8 max-w-fc">
      <img className="h-32 w-32 rounded-full inline object-contain p-2 shadow-lg self-center" alt={title} src={logo} />
    </a>
    <ArticleItem article={{ title, url, desc, author, tags }} />
  </div>
);

export default ToolItem;
