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
import { ShareLink } from './SocialShare';

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

interface SocialLinksProps {
  links?: Social;
  logoColor?: string;
  additionalStyles?: string;
}

function SocialLinks({ links = {}, logoColor = '', additionalStyles = '' }: SocialLinksProps): JSX.Element {
  const theme = useThemeState();
  const getLogoColor = logoColor ? logoColor : `text-${theme}-500`;
  const validLinks = Object.keys(links).filter(link => typeof links[link] === 'string');

  return (
    <div className={`flex ${additionalStyles}`}>
      {validLinks.map(link => {
        const Logo = LINK_LOGO[link];
        return (
          <ShareLink
            label={`${siteConfig.name}'s ${link} profile`}
            url={links[link]}
            key={link}
            icon={<Logo color={getLogoColor} additionalStyles="h-5 w-5" />}
          />
        );
      })}
    </div>
  );
}
export default SocialLinks;
