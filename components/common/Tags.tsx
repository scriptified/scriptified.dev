import React from 'react';
import Text from './Text';
import { useThemeState } from '../../theme/ThemeContext';

function Tags({ tags = [] }: { tags?: Array<string> }): JSX.Element {
  const theme = useThemeState();
  return (
    <>
      {tags.map((tag, index) => (
        <Text type="small" color={`text-${theme}-500`} inline key={index}>
          #{tag}{' '}
        </Text>
      ))}
    </>
  );
}
export default Tags;
