import GitHubLogo from '../icons/github';
import InstagramLogo from '../icons/instagram';
import WebsiteLogo from '../icons/link';
import LinkedInLogo from '../icons/linkedin';
import React from 'react';
import TwitterLogo from '../icons/twitter';
import YouTubeLogo from '../icons/youtube';
import Social from '../../interfaces/social';
import { useThemeState } from '../../theme/ThemeContext';

const LINK_LOGO = {
  website: WebsiteLogo,
  github: GitHubLogo,
  twitter: TwitterLogo,
  linkedin: LinkedInLogo,
  instagram: InstagramLogo,
  youtube: YouTubeLogo,
};

function SocialLinks({
  links = {},
  logoColor = '',
  additionalStyles = '',
}: {
  links?: Social;
  logoColor?: string;
  additionalStyles?: string;
}): JSX.Element {
  const theme = useThemeState();
  const getLogoColor = logoColor ? logoColor : `text-${theme}-500`;
  return (
    <div className={`flex ${additionalStyles}`}>
      {Object.keys(links).map(link => {
        const Logo = LINK_LOGO[link];
        return (
          <a href={links[link]} key={link}>
            {<Logo color={getLogoColor} />}
          </a>
        );
      })}
    </div>
  );
}
export default SocialLinks;
