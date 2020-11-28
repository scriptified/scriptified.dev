import React from 'react';
import Text from './Text';
import { useThemeState } from '../../theme/ThemeContext';

function Tags({ tags = [] }: { tags?: Array<string> }): JSX.Element {
  const theme = useThemeState();
  return (
    <div className="flex space-x-1">
      {tags.map((tag, index) => (
        <Text
          type="small"
          color={`text-${theme}-500`}
          inline
          key={index}
          additionalStyles={`py-1/2 px-1 border-${theme}-200 border rounded`}
        >
          {`#${tag} `}
        </Text>
      ))}
    </div>
  );
}
export default Tags;
