import Highlight, { defaultProps } from 'prism-react-renderer';

import CodeSnippet from '../../interfaces/codeSnippet';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

interface CodeSnippetProps {
  snippet: CodeSnippet;
  showLineNumbers: boolean;
}

function CodeSnippetComponent(props: CodeSnippetProps): JSX.Element {
  const {
    snippet: { code, language },
    showLineNumbers = false,
  } = props;
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={nightOwl}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} text-left my-4 py-4 overflow-x-auto rounded-md border border-solid border-gray-400`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} className="table-row" key={i}>
              {showLineNumbers && <span className="table-cell text-right pr-4 select-none opacity-50">{i + 1}</span>}
              <span className="table-cell px-6">
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default CodeSnippetComponent;
