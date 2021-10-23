import React from 'react';

const WhatsApp = ({
  color = '',
  additionalStyles = 'h-6 w-6',
}: {
  color?: string;
  additionalStyles?: string;
}): JSX.Element => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${color} ${additionalStyles}`}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 21l1.65-3.8a9 9 0 113.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 001 0V9a.5.5 0 00-1 0v1a5 5 0 005 5h1a.5.5 0 000-1h-1a.5.5 0 000 1" />
    </svg>
  );
};

export default WhatsApp;
