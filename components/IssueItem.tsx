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
      <Text type="h1" color={`text-${theme}-800`} additionalStyles="relative z-10 flex flex-row items-center">
        <div
          className={`bg-gradient-to-br from-${theme}-300 to-${theme}-500 h-16 w-16 rounded-full flex justify-center items-center mr-4`}
        >
          {React.cloneElement(icon, {
            color: `text-white`,
            additionalStyles: 'h-10 w-10 p-1',
          })}
        </div>
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
