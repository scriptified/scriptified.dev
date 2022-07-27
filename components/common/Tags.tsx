import React from 'react';
import Text from './Text';
import { useThemeState } from '../../theme/ThemeContext';

function Tags({ tags = [] }: { tags?: Array<string> }): JSX.Element {
  const theme = useThemeState();
  return (
    <div className="flex space-x-2 flex-wrap  [&>*]:py-1/2 [&>*]:px-1  [&>*]:border [&>*]:rounded [&>*]:uppercase">
      {tags?.map((tag, index) => (
        <Text size="sm" color={`text-${theme}-600`} as="span" key={index} additionalStyles={`border-${theme}-200`}>
          {`#${tag} `}
        </Text>
      ))}
    </div>
  );
}
export default Tags;
