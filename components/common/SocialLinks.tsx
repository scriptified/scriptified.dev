import GitHubLogo from '../icons/github';
import InstagramLogo from '../icons/instagram';
import WebsiteLogo from '../icons/link';
import LinkedInLogo from '../icons/linkedin';
import React from 'react';
import TwitterLogo from '../icons/twitter';
import YouTubeLogo from '../icons/youtube';
import Social from '../../interfaces/social';

const LINK_LOGO = {
  website: <WebsiteLogo />,
  github: <GitHubLogo />,
  twitter: <TwitterLogo />,
  linkedin: <LinkedInLogo />,
  instagram: <InstagramLogo />,
  youtube: <YouTubeLogo />,
};

function SocialLinks({ links = {} }: { links?: Social }): JSX.Element {
  return (
    <>
      {Object.keys(links).map(link => (
        <a href={links[link]} key={link} className="mr-3">
          {LINK_LOGO[link]}
        </a>
      ))}
    </>
  );
}
export default SocialLinks;
