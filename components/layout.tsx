import Head from 'next/head';
import Link from 'next/link';
import { useThemeState, useThemeDispatch } from '../theme/ThemeContext';
import { THEMES, Theme } from '../theme';

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
      <select value={currentTheme} onChange={({ target: { value } }) => updateTheme(value as Theme)}>
        {THEMES.map(theme => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
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
