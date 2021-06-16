/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import { ShareIcon } from '../icons/icons';
import { useThemeState } from '../../theme/ThemeContext';

import { debounce } from '../../utils';

interface FloatingShareButtonProps {
  url?: string;
  title?: string;
}

const FloatingShareButton = ({ url = '', title = '' }: FloatingShareButtonProps): JSX.Element => {
  const theme = useThemeState();
  const [showShareBtn, setShowShareBtn] = useState(false);
  const [btnOpacity, setBtnOpacity] = useState(1);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    if (navigator.share) {
      setShowShareBtn(true);
    } else {
      setShowShareBtn(false);
    }
  }, []);

  useEffect(() => {
    const toggleVisibiltyOnScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;
      if (window.scrollY > prevScrollPos) {
        const opacity =
          (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10 ? 1 : 0;
        setBtnOpacity(opacity);
      } else {
        setBtnOpacity(1);
      }
      setPrevScrollPos(currentScrollPos);
    }, 100);

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibiltyOnScroll);
    }
    return () => {
      window.removeEventListener('scroll', toggleVisibiltyOnScroll);
    };
  }, [btnOpacity, prevScrollPos, showShareBtn]);

  const shareExternal = async () => {
    if (navigator.share) {
      // Web Share API is supported
      setShowShareBtn(true);
      const shareData = { title, url };
      navigator.share(shareData).then().catch(console.error);
    } else {
      // Fallback
      setShowShareBtn(false);
    }
  };

  if (!showShareBtn) return null;

  return (
    <div
      className={`lg:hidden z-10 fixed right-6 bottom-6 shadow-lg animate-morph-fast bg-gradient-to-br from-${theme}-300 to-${theme}-700 transition ease-out duration-500`}
      style={{ opacity: btnOpacity }}
    >
      <button
        className={`animate-spin-slow transition duration-500 ease-in-out transform hover:scale-110 rounded-full p-4 inline-flex items-center justify-center`}
        onClick={shareExternal}
      >
        <ShareIcon color={`text-${theme}-100`} />
      </button>
    </div>
  );
};

export default FloatingShareButton;
