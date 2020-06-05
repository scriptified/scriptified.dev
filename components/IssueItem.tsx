const IssueItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-3">
    <h1 className="font-nunito text-4xl font-bold text-black">{title}</h1>
    <div className="mt-1">{children}</div>
  </div>
);

export default IssueItem;
