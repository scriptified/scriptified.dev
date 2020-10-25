import Head from 'next/head';
import Link from 'next/link';
import { useThemeState } from '../theme/ThemeContext';
import ThemePicker from './common/ThemePicker';
import Footer from './Footer';

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
  const theme = useThemeState();

  return (
    <>
      <ThemePicker textColor={home ? 'text-gray-100' : `text-${theme}-900`} />
      {/* {!home && <div className={`clipper-circle bg-${theme}-300`} />} */}
      <div className={`py-0 mx-auto ${additionalStyles ? additionalStyles : ''} relative z-10`}>
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
  );
}
