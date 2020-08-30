import Text from './common/Text';

const IssueItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-20">
    <Text type="h1" color="text-black">
      {title}
    </Text>
    <div className="mt-1">{children}</div>
  </div>
);

export default IssueItem;
