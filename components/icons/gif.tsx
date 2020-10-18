/* eslint-disable max-len */
import React from 'react';

const Gif = ({
  color = '',
  additionalStyles = 'h-6 w-6',
}: {
  color: string;
  additionalStyles?: string;
}): JSX.Element => {
  return (
    <svg
      height="469pt"
      viewBox="-9 0 469 469.9539"
      width="469pt"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${color} ${additionalStyles}`}
    >
      <path d="m293.230469 257.902344c-39.71875-24.132813-72.933594-57.609375-96.757813-97.515625l-30.972656 11.601562c25.441406 51.5 66.175781 93.898438 115.746094 120.382813zm0 0" />
      <path d="m207.910156 156.101562c22.289063 36.667969 52.898438 67.570313 89.351563 90.203126l13.667969-39.300782c-24.558594-18.34375-45.992188-40.527344-63.480469-65.699218zm0 0" />
      <path d="m277.265625 303.828125c-52.875-27.789063-96.269531-72.800781-123.058594-127.609375l-59.425781 22.257812c13.699219 38.039063 35.234375 72.777344 63.207031 101.96875 27.492188 28.566407 60.824219 50.867188 97.71875 65.382813zm0 0" />
      <path d="m332.722656 144.3125 13.976563-40.195312-38.035157 14.25c7.46875 9.140624 15.503907 17.804687 24.058594 25.945312zm0 0" />
      <path d="m315.074219 195.078125 13.339843-38.375c-11.402343-10.453125-21.964843-21.789063-31.585937-33.898437l-37.777344 14.148437c15.6875 22.046875 34.570313 41.636719 56.023438 58.125zm0 0" />
      <path d="m44.933594 341.523438c1.09375 1.761718 3.023437 2.835937 5.097656 2.832031.21875 0 .4375-.011719.652344-.035157 2.292968-.25 4.242187-1.792968 5.007812-3.96875l8.710938-24.742187 24.699218-7.121094c2.15625-.621093 3.785157-2.394531 4.222657-4.597656.4375-2.199219-.390625-4.460937-2.144531-5.859375l-19.570313-15.589844 1.832031-26.640625c.164063-2.339843-1.050781-4.5625-3.109375-5.683593-2.0625-1.125-4.585937-.945313-6.464843.460937l-20.933594 15.585937-23.566406-8.9375c-2.117188-.804687-4.503907-.347656-6.175782 1.175782-1.667968 1.523437-2.339844 3.859375-1.734375 6.039062l6.871094 24.726563-16.5625 21.007812c-1.410156 1.789063-1.6875 4.226563-.710937 6.285157.976562 2.058593 3.03125 3.386718 5.3125 3.429687l25.429687.472656zm0 0" />
      <path d="m374.390625 402.792969c-1.011719-2.046875-3.097656-3.34375-5.382813-3.34375h-24.804687l-13.109375-21.582031c-1.195312-1.964844-3.410156-3.074219-5.699219-2.855469-2.289062.21875-4.253906 1.730469-5.054687 3.886719l-9.199219 24.832031-24.265625 7.128906c-2.148438.632813-3.769531 2.40625-4.199219 4.605469-.429687 2.195312.398438 4.449218 2.148438 5.847656l19.570312 15.585938-1.832031 26.640624c-.160156 2.324219 1.035156 4.53125 3.070312 5.660157 2.035157 1.128906 4.542969.980469 6.429688-.382813l20.929688-15.113281 23.097656 8.933594c2.09375.808593 4.464844.378906 6.144531-1.109375 1.679687-1.488282 2.386719-3.792969 1.832031-5.96875l-6.453125-25.367188 16.164063-21.09375c1.386718-1.8125 1.625-4.257812.613281-6.304687zm0 0" />
      <path d="m98.441406 53.6875c-2.179687-.585938-4.507812.101562-6.019531 1.78125s-1.949219 4.0625-1.136719 6.171875l9.132813 23.699219-14.171875 21.351562c-1.265625 1.90625-1.335938 4.371094-.179688 6.347656 1.15625 1.976563 3.339844 3.121094 5.621094 2.953126l25.449219-1.886719 15.453125 20.28125c1.394531 1.828125 3.714844 2.699219 5.96875 2.242187 2.253906-.460937 4.050781-2.167968 4.617187-4.398437l6.414063-25.203125 24.289062-9.511719c2.117188-.828125 3.582032-2.785156 3.789063-5.046875.203125-2.265625-.886719-4.449219-2.820313-5.644531l-21.355468-13.199219-.910157-25.515625c-.082031-2.296875-1.46875-4.34375-3.566406-5.273437-2.101563-.929688-4.546875-.578126-6.300781.902343l-19.636719 16.582031zm0 0" />
      <path d="m382.699219 271.847656c-3.660157 3.800782-6.972657 3.800782-11.984375 3.808594-5.984375 0-13.429688.007812-20.636719 7.492188-7.117187 7.386718-7.117187 14.988281-7.117187 21.09375 0 5.144531 0 8.863281-3.761719 12.765624-2.300781 2.386719-2.230469 6.183594.15625 8.484376 2.386719 2.296874 6.1875 2.226562 8.484375-.160157 7.117187-7.386719 7.117187-14.984375 7.121094-21.089843 0-5.144532 0-8.863282 3.757812-12.769532 3.671875-3.8125 6.988281-3.8125 12-3.816406 5.980469 0 13.421875-.007812 20.625-7.484375 7.113281-7.382813 7.113281-14.980469 7.113281-21.089844 0-5.144531 0-8.859375 3.753907-12.753906 3.5625-3.699219 6.789062-3.789063 11.582031-3.789063h.726562c5.628907 0 13.21875-.144531 20.277344-7.46875 2.296875-2.386718 2.226563-6.183593-.160156-8.484374-2.386719-2.296876-6.183594-2.226563-8.484375.160156-3.65625 3.800781-7 3.785156-11.96875 3.792968-5.667969 0-13.417969-.007812-20.617188 7.464844-7.101562 7.375-7.101562 14.972656-7.105468 21.074219-.003907 5.152344-.003907 8.871094-3.761719 12.769531zm0 0" />
      <path d="m240.28125 57.535156c-5.984375 0-13.429688.003906-20.640625 7.492188-2.296875 2.386718-2.226563 6.183594.160156 8.484375 2.386719 2.296875 6.1875 2.226562 8.484375-.160157 3.671875-3.8125 6.984375-3.816406 12-3.816406 5.980469 0 13.421875-.007812 20.621094-7.484375 7.113281-7.382812 7.113281-14.984375 7.113281-21.089843 0-5.144532 0-8.859376 3.753907-12.753907 3.660156-3.800781 7.007812-3.792969 11.96875-3.792969 5.6875 0 13.417968.007813 20.621093-7.464843 2.296875-2.386719 2.226563-6.1875-.160156-8.484375-2.386719-2.300782-6.183594-2.230469-8.484375.15625-3.660156 3.800781-7 3.792968-11.96875 3.792968-5.664062.007813-13.417969-.007812-20.617188 7.46875-7.109374 7.375-7.109374 14.972657-7.113281 21.074219 0 5.148438 0 8.871094-3.757812 12.769531-3.660157 3.800782-6.972657 3.804688-11.980469 3.808594zm0 0" />
      <path d="m155.640625 402.027344c5.664063.023437 13.417969.007812 20.621094-7.46875 2.296875-2.386719 2.226562-6.183594-.160157-8.484375-2.386718-2.296875-6.183593-2.226563-8.484374.160156-3.65625 3.800781-6.988282 3.800781-11.96875 3.792969-5.671876-.03125-13.417969-.007813-20.617188 7.464844-7.105469 7.378906-7.109375 14.976562-7.109375 21.078124 0 5.148438 0 8.867188-3.757813 12.769532-3.664062 3.796875-6.976562 3.804687-11.984374 3.804687-5.984376 0-13.429688.007813-20.636719 7.496094-2.265625 2.390625-2.179688 6.164063.191406 8.449219 2.375 2.285156 6.148437 2.226562 8.453125-.128906 3.667969-3.8125 6.984375-3.8125 12-3.816407 5.976562 0 13.417969-.007812 20.617188-7.480469 7.117187-7.386718 7.117187-14.984374 7.117187-21.089843 0-5.144531 0-8.863281 3.753906-12.753907 3.65625-3.796874 6.957031-3.800781 11.964844-3.792968zm0 0" />
      <path d="m420.09375 193.445312c12.902344 0 23.359375-10.460937 23.359375-23.359374 0-12.902344-10.457031-23.363282-23.359375-23.363282s-23.363281 10.460938-23.363281 23.363282c.015625 12.894531 10.464843 23.34375 23.363281 23.359374zm0 0" />
      <path d="m424.492188 340.878906c-15.332032 0-27.761719 12.425782-27.761719 27.761719 0 15.332031 12.429687 27.761719 27.761719 27.761719 15.332031 0 27.761718-12.429688 27.761718-27.761719-.015625-15.328125-12.433594-27.746094-27.761718-27.761719zm0 0" />
      <path d="m53.40625 119.386719c0 12.273437-9.949219 22.226562-22.226562 22.226562-12.273438 0-22.226563-9.953125-22.226563-22.226562 0-12.273438 9.953125-22.226563 22.226563-22.226563 12.277343 0 22.226562 9.953125 22.226562 22.226563zm0 0" />
      <path d="m416.601562 39.746094c10.976563 0 19.875-8.898438 19.875-19.875 0-10.976563-8.898437-19.871094-19.875-19.871094-10.976562 0-19.871093 8.902344-19.871093 19.878906.019531 10.964844 8.90625 19.851563 19.871093 19.867188zm0 0" />
      <path d="m68.730469 400.566406c0 12.023438-9.75 21.773438-21.773438 21.773438-12.027343 0-21.777343-9.75-21.777343-21.773438 0-12.027344 9.75-21.777344 21.777343-21.777344 12.023438 0 21.773438 9.75 21.773438 21.777344zm0 0" />
    </svg>
  );
};

export default Gif;
