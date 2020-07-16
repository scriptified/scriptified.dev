import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

function CodeSnippet({ code, language }) {
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={nightOwl}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} text-left my-4 p-2 overflow-x-auto rounded border border-solid border-gray-400`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} className="table-row" key={i}>
              <span className="table-cell text-right pr-4 select-none opacity-50">{i + 1}</span>
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

export default CodeSnippet;
