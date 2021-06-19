import React, { useEffect, useState } from 'react';

import { CopyIcon, CheckSqaureIcon, TwitterIcon, ShareIcon, WhatsAppIcon, FacebookIcon } from '../icons/icons';
import { useThemeState } from '../../theme/ThemeContext';

interface SocialShareProps {
  url?: string;
  title?: string;
  tags?: Array<string>;
  showText?: boolean;
  twitter?: boolean;
  copyLink?: boolean;
  facebook?: boolean;
  whatsApp?: boolean;
}

const SocialShare = ({
  url = '',
  title = '',
  showText = false,
  twitter = true,
  copyLink = true,
  facebook = true,
  whatsApp = true,
}: SocialShareProps): JSX.Element => {
  const theme = useThemeState();
  const [showShareBtn, setShowShareBtn] = useState(false);
  const [copyBtnText, setCopyBtnText] = useState<'Copy Link' | 'Copied!'>('Copy Link');

  useEffect(() => {
    const timer = setTimeout(() => setCopyBtnText('Copy Link'), 1500);

    return () => clearTimeout(timer);
  }, [copyBtnText, theme]);

  useEffect(() => {
    if (navigator.share) {
      setShowShareBtn(true);
    } else {
      setShowShareBtn(false);
    }
  }, []);

  const copyLinkToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopyBtnText('Copied!');
    } catch (error) {
      console.error(error);
    }
  };

  const shareExternal = async () => {
    if (navigator.share) {
      // Web Share API is supported
      setShowShareBtn(true);
      const shareData = { title, url };
      navigator
        .share(shareData)
        .then(() => {
          // console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
      // Fallback
      setShowShareBtn(false);
    }
  };

  return (
    <section className="lg:flex flex-row space-x-4 pt-6 hidden">
      {twitter ? (
        <a
          aria-label="Share to Twitter"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `I recommend reading '${title}' by ${`@scriptifed_dev`}. \n\nRead at - ${url}\n\n`
          )}`}
          className="transition duration-500 ease-in-out transform hover:scale-125"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon color={`text-${theme}-500`} />
          {showText && <span>Share to Twitter</span>}
        </a>
      ) : null}
      {whatsApp ? (
        <a
          aria-label="Share to Twitter"
          href={`https://wa.me/?text=${encodeURIComponent(
            `I recommend reading '${title}' by ${`@scriptifed_dev`}. \n\nRead at - ${url}\n\n`
          )}`}
          data-action="share/whatsapp/share"
          className="transition duration-500 ease-in-out transform hover:scale-125"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon color={`text-${theme}-500`} />
          {showText && <span>Share to WhatsApp</span>}
        </a>
      ) : null}
      {facebook ? (
        <a
          aria-label="Share to Twitter"
          href={`https://www.facebook.com/dialog/share?app_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&display=popup&href=${url}&redirect_uri=${url}`}
          className="transition duration-500 ease-in-out transform hover:scale-125"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon color={`text-${theme}-500`} />
          {showText && <span>Share to Facebook</span>}
        </a>
      ) : null}
      {copyLink ? (
        <button
          aria-label="Copy link to clipboard"
          className="transition duration-500 ease-in-out transform hover:scale-125"
          onClick={copyLinkToClipBoard}
        >
          {copyBtnText === 'Copy Link' ? (
            <CopyIcon color={`text-${theme}-500`} />
          ) : (
            <CheckSqaureIcon color={`text-${theme}-500`} />
          )}
          {showText && <span>{copyBtnText}</span>}
        </button>
      ) : null}
      {showShareBtn ? (
        <button className="transition duration-500 ease-in-out transform hover:scale-125" onClick={shareExternal}>
          <ShareIcon color={`text-${theme}-500`} />
          {showText && <span>Share</span>}
        </button>
      ) : null}
    </section>
  );
};

export default SocialShare;
