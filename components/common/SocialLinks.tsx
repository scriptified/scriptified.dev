import GitHubLogo from '../icons/github';
import InstagramLogo from '../icons/instagram';
import LinkLogo from '../icons/link';
import LinkedInLogo from '../icons/linkedin';
import React from 'react';
import TwitterLogo from '../icons/twitter';
import YouTubeLogo from '../icons/youtube';

function SocialLinks({ links = {} }: { links?: object }): JSX.Element {
  return (
    <>
      {Object.keys(links).map((link, index) => (
        <a href={links[link]} key={index} className="mr-3">
          {link == 'website' ? <LinkLogo /> : null}
          {link == 'github' ? <GitHubLogo /> : null}
          {link == 'twitter' ? <TwitterLogo /> : null}
          {link == 'linkedin' ? <LinkedInLogo /> : null}
          {link == 'instagram' ? <InstagramLogo /> : null}
          {link == 'youtube' ? <YouTubeLogo /> : null}
        </a>
      ))}
    </>
  );
}
export default SocialLinks;
