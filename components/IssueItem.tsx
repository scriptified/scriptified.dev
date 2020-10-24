import React from 'react';
import Text from './common/Text';
import { useThemeState } from '../theme/ThemeContext';

const IssueItem = ({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}): JSX.Element => {
  const theme = useThemeState();
  return (
    <div className="my-20 relative z-10">
      <Text type="h1" color="text-black" additionalStyles="relative z-10 flex flex-row">
        {React.cloneElement(icon, {
          color: `text-${theme}-300`,
          additionalStyles: 'h-12 w-12 -ml-2 mr-4',
        })}
        {title}
      </Text>
      <div className="mt-1">
        {children}
        {/* <div className="absolute h-24 w-24 issue-item-icon hidden xl:block">
          {React.cloneElement(icon, {
            color: `text-${theme}-300`,
            additionalStyles: 'h-24 w-24',
          })}
        </div> */}
      </div>
    </div>
  );
};

export default IssueItem;
