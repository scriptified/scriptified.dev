import Link from 'next/link';
import React from 'react';
import Meta from '../../interfaces/meta';
import { useThemeState } from '../../theme/ThemeContext';
import Text from './Text';

const convertDate = (date: string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const IssueListItem = ({ issueData }: { issueData: Meta }): JSX.Element => {
  const { number, title, desc, dateOfPublishing } = issueData;
  const theme = useThemeState();

  return (
    <div className={`flex py-8 pr-2 max-w-3xl md:border-0 border-b border-${theme}-500`} key={number}>
      <div className="h-full flex md:flex-row flex-col items-start">
        <div className="w-16 flex-shrink-0 flex md:flex-col text-center leading-none mb-2">
          <span className={`text-${theme}-700 -mb-1 text-lg md:mr-0 mr-2 font-bold md:order-2 uppercase`}>Issue</span>
          <span
            className={`text-transparent bg-gradient-to-b from-${theme}-400 to-${theme}-600 bg-clip-text font-bold text-lg md:text-6xl leading-none`}
          >
            #{number}
          </span>
        </div>

        <div className={`flex-1 md:pl-3 md:ml-6 md:border-l md:border-${theme}-400`}>
          <Link href="/issues/[number]" as={`/issues/${number}`}>
            <a className={`text-${theme}-600 font-sans font-semibold text-2xl no-underline hover:underline`}>
              <Text
                type="h1"
                color="text-transparent"
                additionalStyles={`bg-gradient-to-r from-${theme}-700 to-${theme}-900 bg-clip-text font-bold`}
              >
                {title}
              </Text>
            </a>
          </Link>
          <Text color={`text-${theme}-600`} additionalStyles="order-2 tracking-wider py-3 uppercase">
            {convertDate(dateOfPublishing)}
          </Text>
          <Text type="h3" color={`text-${theme}-800`} additionalStyles="font-roboto font-normal leading-relaxed pb-5">
            {desc}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default IssueListItem;
