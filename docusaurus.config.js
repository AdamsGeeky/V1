// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Geek ink',
  tagline: 'knowledge share is multiply',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://geekink.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AdamsGeeky', // Usually your GitHub org/user name.
  projectName: 'Geekink', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
 //Diagram 
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
  },
  plugins: [
    //plugin progressive web app
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/static/manifest.json', 
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/favicon/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/favicon/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
    
// plugins end here
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // analytics
        gtag: {
          trackingID: 'G-4MCW5NZ45Y',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // editUrl:
          //   'https://github.om/AdamsGeeky',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/AdamsGeeky',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      // Announcement  
      // announcementBar: {
      //   id: 'announcementBar-1', // Increment on change
      //   isCloseable: false,
      //   content: 
      //    'Join C Programming Bootcamp Today ! <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/YUX3ma7jDNz6Sjyf9">Register here</a>',
      //    backgroundColor: 'orange',
      //   //  #4fddbf ,#fafbfc
      //    textColor: 'black',
      //   //  `⭐️️⭐️️⭐️️⭐️️⭐️️`,
      // },
      navbar: {
        logo: {
          alt: 'Geek ink',
          src: 'img/logo.png',
        },
        items: [
          {
            // type: 'docSidebar',
            type: 'dropdown',
            position: 'left',
            label: 'Courses',
            items: [
              {
                type: 'doc',
                label: 'General Computing Basic',
                docId: 'basic/intro',
              },
              // {
              //   type: 'doc',
              //   label: 'Advance Excel',
              //   docId: 'excel/intro',
              // },
              {
                type: 'doc',
                label: 'Python programming',
                docId: 'python/intro',
              },
              // {
              //   type: 'doc',
              //   label: 'Mern Stack',
              //   docId: 'mern/intro',
              // },
              // {
              //   type: 'doc',
              //   label: 'NodeJS',
              //   docId: 'node/intro',
              // },
              // {
              //   type: 'doc',
              //   label: 'ReactJS',
              //   docId: 'react/intro',
              // },
              // {
              //   type: 'doc',
              //   label: 'Java programming',
              //   docId: 'java/intro',
              // },
            ],
          },
          {
            to: '/blog',
             label: 'Blog',
             position: 'left'
            
            },
            {
              to: '/services',
               label: 'Services',
               position: 'left'
              
            },
            {
              to: '/services',
               label: 'Contact Us',
               position: 'right'
              
            },
          // {
          //   href: 'https://github.com/AdamsGeeky',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Courses',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Connect with Geeky',
            items: [
              {
                label: 'WhatsApp',
                href: 'https://wa.me/2348133556494',
              },
              {
                label: 'protfolio',
                href: 'https://portfolio-adamsgeeky.vercel.app/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AdamsGeeky',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AdamsGeeky',
              },
            ],
          },
        ],
        logo: {
          alt: 'Geek ink Logo',
          src: '/img/logo.png',
          href: 'https://geekink.me/',
      
        },
        copyright: `Copyright © ${new Date().getFullYear()} Geekink.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
