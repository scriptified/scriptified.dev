import { THEMES, Theme } from '../theme';
import { useThemeDispatch, useThemeState } from '../theme/ThemeContext';

import Head from 'next/head';
import Link from 'next/link';

const name = 'Scriptified';
export const siteTitle = 'Scriptified';

export default function Layout({
  children,
  home,
  additionalStyles,
}: {
  children: React.ReactNode;
  home?: boolean;
  additionalStyles?: string;
}): JSX.Element {
  const currentTheme = useThemeState();
  const updateTheme = useThemeDispatch();

  return (
    <div className={`py-0 mx-auto mb-24 ${additionalStyles}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Custom Select is inspired from https://tailwindui.com/components/application-ui/forms/select-menus */}
      <div className="space-y-1">
        <label id="listbox-label" className="block text-sm leading-5 font-medium text-gray-700">
          Theme
        </label>
        <div className="relative group">
          <span className="inline-block w-full rounded-md shadow-sm">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
              className={`cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-${currentTheme} focus:border-${currentTheme}-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5`}
            >
              <div className="animate-morph flex items-center space-x-3">
                <span className={`animate-spin-slow flex-shrink-0 h-6 w-6 rounded-full bg-${currentTheme}-500`} />
                <span className="block truncate">{currentTheme}</span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </span>

          <div className="mt-1 w-full rounded-md bg-white shadow-lg dropdown hidden group-hover:block group-focus:block">
            <ul
              // tabIndex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
            >
              {THEMES.map(theme => (
                <li
                  key={theme}
                  id={theme}
                  role="option"
                  className={`text-gray-900 font-normal hover:text-white focus:text-white hover:font-semibold focus:font-semibold bg-white hover:bg-${currentTheme}-500 focus:bg-${currentTheme}-500 cursor-pointer select-none relative py-2 pl-3 pr-9`}
                  onClick={event => {
                    event.persist();
                    const target = event.nativeEvent.srcElement as HTMLElement;
                    updateTheme(target.innerText as Theme);
                  }}
                >
                  <div className="animate-morph flex items-center space-x-3">
                    <span
                      className={`animate-spin-slow flex-shrink-0 h-6 w-6 rounded-full bg-${theme}-500 border-2 border-white`}
                    />
                    <span className={`${currentTheme === theme ? 'font-semibold' : 'font-normal'} block truncate`}>
                      {theme}
                    </span>
                  </div>
                  {currentTheme === theme && (
                    <span className={`absolute inset-y-0 right-0 flex items-center pr-4`}>
                      <svg className={`h-5 w-5 fill-current`} viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <header className="flex flex-col items-center">
        {home ? (
          <div />
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/scriptified-logo.gif"
                  className="w-24 h-24 block rounded-full max-w-full"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl leading-snug my-4 mx-0">
              <Link href="/">
                <a className="no-underline hover:underline">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="my-12 mx-0">
          <Link href="/">
            <a className="no-underline hover:underline">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
