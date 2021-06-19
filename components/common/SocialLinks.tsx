import React from 'react';
import {
  GithubIcon,
  InstagramIcon,
  LinkIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
  EmailIcon,
  RSSIcon,
} from '../icons/icons';
import Social from '../../interfaces/social';
import { useThemeState } from '../../theme/ThemeContext';
import { siteConfig } from '../Layout';

const LINK_LOGO = {
  website: LinkIcon,
  github: GithubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  email: EmailIcon,
  rss: RSSIcon,
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
  const validLinks = Object.keys(links).filter(link => typeof links[link] === 'string');

  return (
    <div className={`flex ${additionalStyles}`}>
      {validLinks.map(link => {
        const Logo = LINK_LOGO[link];
        return (
          <a
            aria-label={`Go to ${siteConfig.name}'s ${link} profile`}
            href={links[link]}
            key={link}
            className="transition duration-500 ease-in-out transform hover:scale-125"
            target="_blank"
            rel="noreferrer"
          >
            {<Logo color={getLogoColor} additionalStyles="h-5 w-5" />}
          </a>
        );
      })}
    </div>
  );
}
export default SocialLinks;
