import ReactMarkdown from 'react-markdown';

const Markdown = ({ children }: { children: string }): JSX.Element => (
  <ReactMarkdown className="react-markdown">{children}</ReactMarkdown>
);

export default Markdown;
