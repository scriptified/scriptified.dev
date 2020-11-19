import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Meta from '../interfaces/meta';
import { useThemeState } from '../theme/ThemeContext';
import Button from './common/Button';
import IssueListItem from './common/IssueListItem';
import Text from './common/Text';

const LatestIssues = ({ allIssuesData }: { allIssuesData: Meta[] }): JSX.Element => {
  const theme = useThemeState();
  const router = useRouter();
  const reversedIssuesData = allIssuesData.slice(0, 3).reverse();

  return (
    <Fragment>
      <Text color={`text-${theme}-900`} additionalStyles="text-5xl leading-snug my-8 mx-0" type="h1">
        Latest Issues
      </Text>
      <ul className="m-0 p-0 list-none">
        {reversedIssuesData.map((data, index) => (
          <IssueListItem issueData={data} key={index} />
        ))}
      </ul>
      <Button size="md" type="secondary" onClick={() => router.push('/issues')} additionalStyles="mt-4">
        View All Issues
      </Button>
    </Fragment>
  );
};

export default LatestIssues;
