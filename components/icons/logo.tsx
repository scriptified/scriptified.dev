const Logo = ({
  color = '',
  additionalStyles = 'h-6 w-6',
}: {
  color?: string;
  additionalStyles?: string;
}): JSX.Element => {
  return (
    <svg
      width="160"
      height="237"
      viewBox="0 0 160 237"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${color} ${additionalStyles}`}
    >
      <path
        d="M77 5L8.14135 73.4056C4.20494 77.3161 4.20494 83.6839 8.14135 87.5944L77 156"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M103 5L34.1414 73.4056C30.2049 77.3161 30.2049 83.6839 34.1413 87.5944L103 156"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57 232L124.999 163.548C128.873 159.648 128.873 153.352 124.999 149.452L57 81"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M83 231L151.859 162.594C155.795 158.684 155.795 152.316 151.859 148.406L83 80"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
