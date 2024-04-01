/*
 Repository of helper functions for common functionalites used in the app
*/

/* =================================================================== */

/* Reference - https://stackoverflow.com/a/59104590/8334159
 Returns a function, that, as long as it continues to be invoked, will not
 be triggered. The function will be called after it stops being called for
`wait` milliseconds.
*/

function debounce<Params extends unknown[]>(
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

const convertDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

/* =================================================================== */

/**
 * Get format/extension of media from it's URL
 * @param mediaUrl URL of media
 * @returns {string} media format
 */
const getMediaFormat = (mediaUrl: string): string => {
  const extension = mediaUrl.split('.');
  const mediaFormat = extension.pop();

  switch (mediaFormat) {
    case 'gif':
      return 'gif';
    case 'mp4':
      return 'mp4';
    default:
      return mediaFormat;
  }
};

/* =================================================================== */

type UtmMedium = 'newsletter' | 'website';

interface UtmParams {
  utm_source: string;
  utm_medium: UtmMedium;
}

/**
 * Get URL with UTM tracking params
 * @param url URL to be appended with UTM tracking params
 * @returns {string} URL with UTM tracking params
 */
const getUrlWithUtmTrackingParams = ({ url, medium = 'website' }: { url: string; medium?: UtmMedium }): string => {
  const utmParams: UtmParams = {
    utm_source: 'scriptified.dev',
    utm_medium: medium,
  };

  try {
    const urlWithParams = new URL(url);

    Object.keys(utmParams).forEach(key => {
      urlWithParams.searchParams.set(key, utmParams[key]);
    });

    return urlWithParams.toString();
  } catch (err) {
    console.error(err);
    // return url as is if URL is invalid
    return url;
  }
};

module.exports = { debounce, convertDate, getMediaFormat, getUrlWithUtmTrackingParams };
