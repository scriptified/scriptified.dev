/*
 Repository of helper functions for common functionalites used in the app
*/

/* =================================================================== */

/* Reference - https://stackoverflow.com/a/59104590/8334159
 Returns a function, that, as long as it continues to be invoked, will not
 be triggered. The function will be called after it stops being called for
`wait` milliseconds.
*/

export function debounce<Params extends unknown[]>(
  func: (...args: Params) => unknown,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

/* =================================================================== */

export const convertDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

/* =================================================================== */
