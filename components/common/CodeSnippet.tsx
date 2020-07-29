import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

import CodeSnippet from '../../interfaces/codeSnippet';

function CodeSnippetComponent({ snippet: { code, language } }: { snippet: CodeSnippet }): JSX.Element {
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={nightOwl}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} text-left my-4 p-4 overflow-x-auto rounded-lg border-solid border-8 border-gray-600`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} className="table-row" key={i}>
              {/* <span className="table-cell text-right pr-4 select-none opacity-50">{i + 1}</span> */}
              <span className="table-cell">
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
