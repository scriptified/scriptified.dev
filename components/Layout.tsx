import React from 'react';
import NextHead from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { useThemeState } from '../theme/ThemeContext';
import ThemePicker from './common/ThemePicker';
import Footer from './Footer';
import Loading from '../public/loading.svg';
import { useLoadingState } from './LoadingContext';

export const siteTitle = 'Scriptified';

const Loader = () => (
  <div className="flex items-center justify-center h-screen w-screen">
    <Loading className="w-32 h-auto" />
  </div>
);

type SEO = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  twitter?: string;
  author?: string;
};

const Head = ({
  title = siteTitle,
  description = 'Your go to JavaScript newsletter',
  url = 'https://scriptified.dev',
  image = `https://og-image.now.sh/${encodeURI(
    siteTitle
  )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
  twitter = '@scriptified_dev',
  author = 'Scriptified',
}: SEO) => (
  <NextHead>
    {/* Title and Description */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="title" content={title} />

    {/* Essentials */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />

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
      <Head {...seoProps} />
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
                    <a>
                      <Image
                        src="/images/scriptified-logo.png"
                        className="w-24 h-24 block rounded-full max-w-full"
                        width={120}
                        height={120}
                        alt={name}
                      />
                    </a>
                  </Link>
                  <h2 className="text-3xl leading-snug my-4 mx-0">
                    <Link href="/">
                      <a className="no-underline hover:underline text-white font-bold">{name}</a>
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
