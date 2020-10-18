/* eslint-disable max-len */
import React from 'react';

const Articles = ({
  color = '',
  additionalStyles = 'h-6 w-6',
}: {
  color: string;
  additionalStyles?: string;
}): JSX.Element => {
  return (
    <svg
      height="512pt"
      viewBox="0 -17 512 512"
      width="512pt"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${color} ${additionalStyles}`}
    >
      <path d="m503.464844 307.199219h-494.929688c-4.710937 0-8.535156-3.820313-8.535156-8.53125v-264.527344c0-18.824219 15.316406-34.140625 34.140625-34.140625h443.71875c18.824219 0 34.140625 15.316406 34.140625 34.140625v264.527344c0 4.710937-3.824219 8.53125-8.535156 8.53125zm-486.398438-17.066407h477.867188v-255.992187c0-9.417969-7.664063-17.074219-17.074219-17.074219h-443.71875c-9.410156 0-17.074219 7.65625-17.074219 17.074219zm0 0" />
      <path d="m477.859375 375.464844h-443.71875c-18.824219 0-34.140625-15.316406-34.140625-34.140625v-42.65625c0-4.710938 3.824219-8.535157 8.535156-8.535157h494.929688c4.710937 0 8.535156 3.824219 8.535156 8.535157v42.65625c0 18.824219-15.316406 34.140625-34.140625 34.140625zm-460.792969-68.265625v34.125c0 9.421875 7.664063 17.074219 17.074219 17.074219h443.71875c9.410156 0 17.074219-7.652344 17.074219-17.074219v-34.125zm0 0" />
      <path d="m281.601562 341.332031h-51.203124c-4.707032 0-8.53125-3.820312-8.53125-8.53125 0-4.710937 3.824218-8.535156 8.53125-8.535156h51.203124c4.707032 0 8.53125 3.824219 8.53125 8.535156 0 4.710938-3.824218 8.53125-8.53125 8.53125zm0 0" />
      <path d="m469.332031 307.199219h-426.664062c-4.710938 0-8.535157-3.820313-8.535157-8.53125v-256c0-4.710938 3.824219-8.535157 8.535157-8.535157h426.664062c4.710938 0 8.535157 3.824219 8.535157 8.535157v256c0 4.710937-3.824219 8.53125-8.535157 8.53125zm-418.132812-17.066407h409.601562v-238.933593h-409.601562zm0 0" />
      <path d="m366.933594 477.867188h-221.867188c-14.113281 0-25.601562-11.488282-25.601562-25.601563s11.488281-25.597656 25.601562-25.597656h221.867188c14.113281 0 25.601562 11.484375 25.601562 25.597656s-11.488281 25.601563-25.601562 25.601563zm-221.867188-34.132813c-4.710937 0-8.53125 3.832031-8.53125 8.53125 0 4.703125 3.820313 8.535156 8.53125 8.535156h221.867188c4.710937 0 8.53125-3.832031 8.53125-8.535156 0-4.699219-3.820313-8.53125-8.53125-8.53125zm0 0" />
      <path d="m349.867188 443.734375h-187.734376c-4.710937 0-8.53125-3.824219-8.53125-8.535156 0-4.710938 3.820313-8.53125 8.53125-8.53125 28.3125 0 42.667969-20.097657 42.667969-59.734375 0-4.710938 3.820313-8.535156 8.53125-8.535156h85.335938c4.710937 0 8.53125 3.824218 8.53125 8.535156 0 39.636718 14.355469 59.734375 42.667969 59.734375 4.710937 0 8.53125 3.820312 8.53125 8.53125 0 4.710937-3.820313 8.535156-8.53125 8.535156zm-146.167969-17.066406h104.609375c-10.511719-11.640625-16.699219-28.972657-17.9375-51.203125h-68.734375c-1.246094 22.230468-7.433594 39.5625-17.9375 51.203125zm0 0" />
      <path d="m426.667969 119.464844h-110.933594c-4.710937 0-8.535156-3.820313-8.535156-8.53125v-34.132813c0-4.710937 3.824219-8.535156 8.535156-8.535156h110.933594c4.710937 0 8.53125 3.824219 8.53125 8.535156v34.132813c0 4.710937-3.820313 8.53125-8.53125 8.53125zm-102.402344-17.066406h93.867187v-17.066407h-93.867187zm0 0" />
      <path d="m349.867188 273.066406h-34.132813c-4.710937 0-8.535156-3.824218-8.535156-8.53125v-34.136718c0-4.707032 3.824219-8.53125 8.535156-8.53125h34.132813c4.710937 0 8.53125 3.824218 8.53125 8.53125v34.136718c0 4.707032-3.820313 8.53125-8.53125 8.53125zm-25.601563-17.066406h17.066406v-17.066406h-17.066406zm0 0" />
      <path d="m426.667969 273.066406h-34.132813c-4.710937 0-8.535156-3.824218-8.535156-8.53125v-34.136718c0-4.707032 3.824219-8.53125 8.535156-8.53125h34.132813c4.710937 0 8.53125 3.824218 8.53125 8.53125v34.136718c0 4.707032-3.820313 8.53125-8.53125 8.53125zm-25.601563-17.066406h17.066406v-17.066406h-17.066406zm0 0" />
      <path d="m392.535156 162.132812h-76.800781c-4.710937 0-8.535156-3.824218-8.535156-8.53125 0-4.710937 3.824219-8.535156 8.535156-8.535156h76.800781c4.707032 0 8.53125 3.824219 8.53125 8.535156 0 4.707032-3.824218 8.53125-8.53125 8.53125zm0 0" />
      <path d="m426.667969 196.265625h-110.933594c-4.710937 0-8.535156-3.820313-8.535156-8.53125s3.824219-8.535156 8.535156-8.535156h110.933594c4.710937 0 8.53125 3.824219 8.53125 8.535156s-3.820313 8.53125-8.53125 8.53125zm0 0" />
      <path d="m187.734375 273.066406c-2.1875 0-4.371094-.835937-6.035156-2.5l-45.164063-45.167968-45.167968 45.167968c-3.328126 3.335938-8.738282 3.335938-12.066407 0-3.335937-3.335937-3.335937-8.730468 0-12.066406l51.199219-51.199219c3.328125-3.335937 8.738281-3.335937 12.066406 0l51.199219 51.199219c3.335937 3.335938 3.335937 8.730469 0 12.066406-1.664063 1.664063-3.847656 2.5-6.03125 2.5zm0 0" />
      <path d="m145.066406 170.667969c-18.824218 0-34.132812-15.308594-34.132812-34.132813 0-18.828125 15.308594-34.136718 34.132812-34.136718 18.824219 0 34.132813 15.308593 34.132813 34.136718 0 18.824219-15.308594 34.132813-34.132813 34.132813zm0-51.203125c-9.410156 0-17.066406 7.65625-17.066406 17.070312 0 9.410156 7.65625 17.066406 17.066406 17.066406 9.414063 0 17.066406-7.65625 17.066406-17.066406 0-9.414062-7.652343-17.070312-17.066406-17.070312zm0 0" />
      <path d="m187.734375 273.066406c-2.1875 0-4.371094-.835937-6.035156-2.5l-25.597657-25.601562c-3.335937-3.335938-3.335937-8.726563 0-12.066406l51.199219-51.199219c3.328125-3.335938 8.738281-3.335938 12.066407 0l59.734374 59.734375c3.335938 3.335937 3.335938 8.730468 0 12.066406-3.328124 3.335938-8.738281 3.335938-12.066406 0l-53.703125-53.699219-39.132812 39.132813 19.566406 19.566406c3.335937 3.335938 3.335937 8.730469 0 12.066406-1.664063 1.664063-3.847656 2.5-6.03125 2.5zm0 0" />
      <path d="m273.066406 273.066406h-187.734375c-4.710937 0-8.53125-3.824218-8.53125-8.53125v-187.734375c0-4.710937 3.820313-8.535156 8.53125-8.535156h187.734375c4.710938 0 8.535156 3.824219 8.535156 8.535156v187.734375c0 4.707032-3.824218 8.53125-8.535156 8.53125zm-179.199218-17.066406h170.667968v-170.667969h-170.667968zm0 0" />
    </svg>
  );
};

export default Articles;
