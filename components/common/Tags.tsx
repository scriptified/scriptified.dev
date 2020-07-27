import React from 'react';
import Text from './Text';

function Tags({ tags = [] }: { tags?: Array<string> }): JSX.Element {
  return (
    <>
      {tags.map((tag, index) => (
        <Text type="small" color="green-4" inline key={index}>
          #{tag}{' '}
        </Text>
      ))}
    </>
  );
}
export default Tags;
