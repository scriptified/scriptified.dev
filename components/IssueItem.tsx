import React from 'react';
import Text from './common/Text';
import { useThemeState } from '../theme/ThemeContext';

const IssueItem = ({
  title,
  children,
  icon,
  id,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
  id?: string;
}): JSX.Element => {
  const theme = useThemeState();
  return (
    <div id={id} className="my-20">
      <div className="flex flex-row items-center">
        <Text
          type="h1"
          color="text-transparent"
          additionalStyles={`sm:text-4xl md:text-5xl bg-gradient-to-b from-${theme}-600 to-${theme}-900 bg-clip-text`}
        >
          {title}
        </Text>
      </div>
      <div className="pt-1">{children}</div>
    </div>
  );
};

export default IssueItem;
