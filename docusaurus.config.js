// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fugu Docs',
  tagline: 'Docs for Fugu',
  url: 'https://docs.fugu.lol',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shafy',
  projectName: 'fugu-docs',
  scripts: [
    {src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'docs.fugu.lol'},
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/shafy/fugu-docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: 'f101ce8b3beb62098d6abd98711cf054',
        appId: 'HVICHSGTAO',
        indexName: 'fugu',
        searchParameters: {
          clickAnalytics: false,
          analytics: false,
        }
      },
      navbar: {
        title: 'Fugu Docs',
        logo: {
          alt: 'Fugu Logo',
          src: 'img/fugu_logo.jpg',
        },
        items: [
          {
            href: 'https://github.com/shafy/fugu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Fugu',
            items: [
              {
                label: 'About',
                to: 'https://fugu.lol',
              },
              {
                label: 'Create an Account',
                to: 'https://app.fugu.lol/users/sign_up',
              },
              {
                label: 'Sign in',
                to: 'https://app.fugu.lol/users/sign_in',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Twitter',
                to: 'https://twitter.com/canolcer',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fugu. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
