import { NextApiResponse } from 'next';
import React from 'react';
import { siteConfig } from '../components/Layout';
import { issueAPI } from '../lib/issues';

type SitemapData = Array<{
  id: number;
  date: string;
}>;

const createSitemap = (posts: SitemapData) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${siteConfig.url}</loc>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>${siteConfig.url}/issues</loc>
            <priority>0.8</priority>
            <changefreq>weekly</changefreq>
        </url>
        ${posts
          .map(({ id, date }) => {
            return `
                    <url>
                        <loc>${`${siteConfig.url}/issues/${id}`}</loc>
                        <lastmod>${date}</lastmod>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }: { res: NextApiResponse }): Promise<void> {
    const posts = await issueAPI.allIssuesReversed();
    const sitemapData = posts.map(post => ({ id: post.id, date: post.dateOfPublishing }));

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(sitemapData));
    res.end();
  }
}

export default Sitemap;
