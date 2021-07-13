import React, { useEffect, useState } from "react";

import {
  CopyIcon,
  CheckSqaureIcon,
  TwitterIcon,
  ShareIcon,
  WhatsAppIcon,
  FacebookIcon,
} from "../icons/icons";
import { useThemeState } from "../../theme/ThemeContext";

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

interface ShareLinkProps {
  text: string;
  label: string;
  url: string;
  showText?: boolean;
  icon: React.ReactNode;
}
const ShareLink = ({ text, label, url, icon, showText }: ShareLinkProps) => {
  return (
    <a
      aria-label={label}
      href={url}
      className="transition duration-500 ease-in-out transform hover:scale-125"
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      {showText && <span>{text}</span>}
    </a>
  );
};

const SocialShare = ({
  url = "",
  title = "",
  showText = false,
  twitter = true,
  copyLink = true,
  facebook = true,
  whatsApp = true,
}: SocialShareProps): JSX.Element => {
  const theme = useThemeState();
  const [showShareBtn, setShowShareBtn] = useState(false);
  const [copyBtnText, setCopyBtnText] = useState<"Copy Link" | "Copied!">(
    "Copy Link"
  );

  useEffect(() => {
    const timer = setTimeout(() => setCopyBtnText("Copy Link"), 1500);

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
      setCopyBtnText("Copied!");
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

  const shareContent = encodeURIComponent(
    `I recommend reading '${title}' by @scriptifed_dev. \n\nRead at - ${url}\n\n`
  );
  const facebookShareURL = `https://www.facebook.com/dialog/share?app_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}&display=popup&href=${url}&redirect_uri=${url}`;
  const twitterShareURL = `https://twitter.com/intent/tweet?text=${shareContent}`;
  const whatsAppShareURL = `https://wa.me/?text=${shareContent}`;

  return (
    <section className="flex flex-row space-x-4 pt-6">
      {twitter && (
        <ShareLink
          showText={showText}
          label="Share to Twitter"
          text="Share to Twitter"
          url={twitterShareURL}
          icon={<TwitterIcon color={`text-${theme}-500`} />}
        />
      )}
      {whatsApp && (
        <ShareLink
          showText={showText}
          label="Share to WhatsApp"
          text="Share to WhatsApp"
          url={whatsAppShareURL}
          icon={<WhatsAppIcon color={`text-${theme}-500`} />}
        />
      )}
      {facebook && (
        <ShareLink
          showText={showText}
          label="Share to Facebook"
          text="Share to Facebook"
          url={facebookShareURL}
          icon={<FacebookIcon color={`text-${theme}-500`} />}
        />
      )}
      {copyLink ? (
        <button
          aria-label="Copy link to clipboard"
          className="transition duration-500 ease-in-out transform hover:scale-125"
          onClick={copyLinkToClipBoard}
        >
          {copyBtnText === "Copy Link" ? (
            <CopyIcon color={`text-${theme}-500`} />
          ) : (
            <CheckSqaureIcon color={`text-${theme}-500`} />
          )}
          {showText && <span>{copyBtnText}</span>}
        </button>
      ) : null}
      {showShareBtn ? (
        <button
          aria-label="Share"
          className="hidden lg:inline-block transition duration-500 ease-in-out transform hover:scale-125"
          onClick={shareExternal}
        >
          <ShareIcon color={`text-${theme}-500`} />
          {showText && <span>Share</span>}
        </button>
      ) : null}
    </section>
  );
};

export default SocialShare;
