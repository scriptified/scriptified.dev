/* eslint-disable max-len */
import React from 'react';

const DevOfTheWeek = ({
  color = '',
  additionalStyles = 'h-6 w-6',
}: {
  color?: string;
  additionalStyles?: string;
}): JSX.Element => {
  return (
    <svg
      id="icons"
      enableBackground="new 0 0 64 64"
      height="512"
      viewBox="0 0 64 64"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${color} ${additionalStyles}`}
    >
      <path d="m12.001 62.999h39.999c1.103 0 2-.897 2-2v-6.998c0-4.963-4.037-9-9-9h-5v-4.166c4.774-2.771 8-7.928 8-13.835v-9.001c0-2.618-.612-5.09-1.674-7.307-.026-.08-.063-.152-.108-.224-2.783-5.6-8.549-9.467-15.216-9.467-9.373 0-16.998 7.625-16.998 16.998v2c0 .042.02.079.024.12.008.067.018.131.039.194.021.062.048.116.08.171.031.056.063.108.105.157s.088.089.139.129c.05.04.099.075.156.105.059.031.12.051.186.069.04.012.072.036.114.042.395.062.771.11 1.152.161v5.853c0 5.907 3.226 11.063 8 13.835v4.164l-4.997.001c-4.964 0-9.002 4.038-9.002 9.002l.001 6.997c0 1.103.897 2 2 2zm19.999-14.97 1.434.358-.992 1.613h-.883l-.992-1.613zm-.166 3.972h.332l1.637 8.998h-3.605zm20.166 2v6.998h-16.166l-1.782-9.801 1.416-2.302.29.072c.08.02.161.03.243.03.103 0 .205-.019.305-.051.038-.013.07-.033.105-.05.049-.022.099-.037.144-.067l2.745-1.83h5.7c3.859.001 7 3.142 7 7.001zm-6-36.002v1.277c-1.473-1.55-2.804-2.445-4.091-2.896l3.162-3.527c.59 1.608.929 3.336.929 5.146zm-14.998-14.998c5.683 0 10.637 3.177 13.181 7.848l-4.622 5.155c-1.298.021-2.621.368-4.068.839-.007.002-.014.003-.02.006-.415.135-.836.276-1.274.425-3.751 1.276-8.797 2.989-17.175 1.995-.008 0-.015-.005-.023-.005-.003 0-.005.001-.008.001-.321-.039-.657-.088-.988-.135v-1.13c-.001-8.271 6.727-14.999 14.997-14.999zm-6.068 18.439c4.254-.358 7.367-1.409 9.908-2.273.325-.11.636-.216.938-.316 3.176 1.474 5.22 4.626 5.22 8.149 0 4.962-4.037 9-9 9s-9-4.038-9-9c0-2.022.689-3.978 1.934-5.56zm-6.934 5.56v-5.621c1.6.148 3.075.201 4.446.181-.938 1.648-1.446 3.52-1.446 5.44 0 6.065 4.935 11 11 11s11-4.935 11-11c0-3.572-1.712-6.842-4.511-8.882 2.521-.42 4.498.377 7.511 4.231v4.651c0 7.72-6.28 14-14 14s-14-6.28-14-14zm14 16c2.122 0 4.146-.424 6-1.178v3.642l-2.188 1.458-3.57-.893c-.015-.004-.029.001-.044-.002-.063-.014-.129-.01-.195-.01-.07 0-.139-.004-.206.01-.014.003-.026-.001-.039.002l-3.569.893-2.189-1.459v-3.641c1.854.754 3.878 1.178 6 1.178zm-12.998 4 5.696-.001 2.748 1.832c.045.03.095.045.144.067.035.017.068.037.105.05.1.032.202.051.305.051.082 0 .164-.011.243-.03l.289-.072 1.416 2.303-1.782 9.8h-16.165l-.001-6.998c0-3.861 3.141-7.002 7.002-7.002z" />
      <path d="m27.999 29.998c.256 0 .512-.098.707-.293.391-.39.391-1.023 0-1.414l-1.292-1.292 1.292-1.292c.391-.391.391-1.024 0-1.414-.391-.391-1.023-.391-1.414 0l-1.999 2c-.195.194-.293.45-.293.706s.098.512.293.707l1.999 2c.195.194.451.292.707.292z" />
      <path d="m35.297 29.705c.195.195.451.293.707.293s.512-.098.707-.293l1.999-2c.195-.195.293-.451.293-.707s-.098-.512-.293-.707l-1.999-2c-.391-.391-1.023-.391-1.414 0-.391.39-.391 1.023 0 1.414l1.292 1.292-1.292 1.292c-.391.393-.391 1.026 0 1.416z" />
      <path d="m30.685 30.947c.105.035.212.052.316.052.419 0 .809-.265.948-.685l1.999-5.999c.175-.524-.108-1.09-.632-1.265-.528-.177-1.09.109-1.265.633l-1.999 5.999c-.174.525.109 1.09.633 1.265z" />
    </svg>
  );
};

export default DevOfTheWeek;
