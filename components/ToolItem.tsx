import Tags from './common/Tags';
import Text from './common/Text';
import Tool from '../interfaces/tool';

const ToolItem = ({ tool: { title, url, logo, author, desc, tags } }: { tool: Tool }): JSX.Element => (
  <div className="flex flex-row items-center">
    <a href={url} className="w-full mr-8">
      <img className="h-32 w-32 rounded-full inline object-contain p-2 shadow-lg self-center" alt={title} src={logo} />
    </a>
    <div>
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
  </div>
);

export default ToolItem;
