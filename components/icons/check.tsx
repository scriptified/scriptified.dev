/* eslint-disable max-len */
const CheckMark = ({ color = '' }: { color: string }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-check ${color}`}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};
export default CheckMark;
