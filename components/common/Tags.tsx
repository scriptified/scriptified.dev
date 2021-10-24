import React from 'react';
import Text from './Text';
import { useThemeState } from '../../theme/ThemeContext';

function Tags({ tags = [] }: { tags?: Array<string> }): JSX.Element {
  const theme = useThemeState();
  return (
    <div className="flex space-x-2 flex-wrap">
      {tags?.map((tag, index) => (
        <Text
          type="small"
          color={`text-${theme}-600`}
          inline
          key={index}
          additionalStyles={`py-1/2 px-1 border-${theme}-200 border rounded uppercase`}
        >
          {`#${tag} `}
        </Text>
      ))}
    </div>
  );
}
export default Tags;
