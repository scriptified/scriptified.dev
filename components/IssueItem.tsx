import Text from './Text';

const IssueItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-3">
    <Text type="h1" color="black-0">
      {title}
    </Text>
    <div className="mt-1">{children}</div>
  </div>
);

export default IssueItem;
