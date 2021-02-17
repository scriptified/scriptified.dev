import React from 'react';
import NextHead from 'next/head';
import Link from 'next/link';

import { useThemeState } from '../theme/ThemeContext';
import { Theme } from '../theme/theme';
import ThemePicker from './common/ThemePicker';
import Footer from './Footer';
import { useLoadingState } from './LoadingContext';
import { ScriptifiedLogo } from './icons/icons';

export const siteConfig = {
  name: 'Scriptified',
  description: 'Insightful tips, tools, resources & more on React and JavaScript',
  url: 'https://scriptified.dev',
};

const Loader = () => (
  <div className="flex items-center justify-center h-screen w-screen">
    <ScriptifiedLogo color={`text-black-900`} additionalStyles="w-24 h-24 animate-pulse" />
  </div>
);

type SEO = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  twitter?: string;
  author?: string;
  faviconPath?: Theme;
};

const Head = ({
  title = siteConfig.name,
  description = siteConfig.description,
  url = siteConfig.url,
  image = 'http://placekitten.com/g/1200/627',
  twitter = '@scriptified_dev',
  author = siteConfig.name,
  faviconPath,
}: SEO) => (
  <NextHead>
    {/* Title and Description */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="title" content={title} />

    {/* Essentials */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* General */}
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="author" content={author} />
    <meta name="description" content={description} />
    <meta property="apple-mobile-web-app-title" content={title} />

    {/* Open Graph */}
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content={twitter} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:image" content={image} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:url" content={url} />

    {/* Favicons */}
    <link rel="icon" type="image/png" sizes="16x16" href={`/icons/${faviconPath}/favicon-16x16.png`} />
    <link rel="icon" type="image/png" sizes="32x32" href={`/icons/${faviconPath}/favicon-32x32.png`} />
    <link rel="icon" type="image/png" sizes="96x96" href={`/icons/${faviconPath}/favicon-96x96.png`} />
    <link rel="icon" type="image/png" sizes="128x128" href={`/icons/${faviconPath}/favicon-128.png`} />
    <link rel="shortcut icon" href={`/icons/${faviconPath}/favicon.ico`} />
    <link rel="icon" href={`/icons/${faviconPath}/favicon.ico`} />
  </NextHead>
);

export default function Layout({
  children,
  home,
  additionalStyles,
  ...seoProps
}: {
  children: React.ReactNode;
  home?: boolean;
  additionalStyles?: string;
} & SEO): JSX.Element {
  const theme = useThemeState();
  const loading = useLoadingState();

  return (
    <>
      <Head {...seoProps} faviconPath={theme} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <ThemePicker textColor={home ? 'text-gray-100' : `text-${theme}-900`} />
          <div className={`py-0 mx-auto ${additionalStyles ? additionalStyles : ''} relative z-10`}>
            <header className="flex flex-col items-center">
              {home ? (
                <div />
              ) : (
                <>
                  <Link href="/">
                    <a aria-label={siteConfig.name}>
                      <ScriptifiedLogo color={`text-${theme}-900`} additionalStyles="w-24 h-24" />
                    </a>
                  </Link>
                  <h2 className="text-6xl leading-snug my-4 mx-0">
                    <Link href="/">
                      <a className={`no-underline hover:underline text-${theme}-900 font-bold font-sniglet`}>
                        {siteConfig.name}
                      </a>
                    </Link>
                  </h2>
                </>
              )}
            </header>
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
