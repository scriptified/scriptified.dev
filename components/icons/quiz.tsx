/* eslint-disable max-len */
import React from 'react';

const Quiz = ({
  color = '',
  additionalStyles = 'h-6 w-6',
}: {
  color?: string;
  additionalStyles?: string;
}): JSX.Element => {
  return (
    <svg
      id="Capa_1"
      enableBackground="new 0 0 512 512"
      height="512"
      viewBox="0 0 512 512"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${color} ${additionalStyles}`}
    >
      <g>
        <path d="m497 30h-48.563c-6.197-17.461-22.881-30-42.437-30s-36.24 12.539-42.437 30h-215.126c-6.197-17.461-22.881-30-42.437-30s-36.24 12.539-42.437 30h-48.563c-8.291 0-15 6.709-15 15v61c0 8.291 6.709 15 15 15h482c8.291 0 15-6.709 15-15v-61c0-8.291-6.709-15-15-15z" />
        <path d="m31 406c0 8.291 6.709 15 15 15h420c8.291 0 15-6.709 15-15v-255h-450zm105-45c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm270 0h-30c-8.291 0-15-6.709-15-15s6.709-15 15-15h30c8.291 0 15 6.709 15 15s-6.709 15-15 15zm-90-150h90c8.291 0 15 6.709 15 15s-6.709 15-15 15h-90c-8.291 0-15-6.709-15-15s6.709-15 15-15zm-90 0h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h180c8.291 0 15 6.709 15 15s-6.709 15-15 15h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15zm0 60h90c8.291 0 15 6.709 15 15s-6.709 15-15 15h-90c-8.291 0-15-6.709-15-15s6.709-15 15-15zm-90-120c24.814 0 45 20.186 45 45 0 18.94-11.982 35.977-29.81 42.378 0 8.276-6.812 16.304-15.088 16.304-8.291 0-15.103-5.391-15.103-13.682 0-15.132 8.071-26.572 20.068-30.864 5.934-2.139 9.933-7.808 9.933-14.136 0-8.276-6.724-15-15-15s-15 6.724-15 15c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814 20.186-45 45-45z" />
        <path d="m286 482h-15v-31h-30v31h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h60c8.291 0 15-6.709 15-15s-6.709-15-15-15z" />
      </g>
    </svg>
  );
};

export default Quiz;
