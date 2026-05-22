import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Sigilweaver Blog',
    tagline: 'Notes, deep dives, and reverse-engineering writeups from the Sigilweaver suite',
    favicon: 'img/favicon.ico',

    url: 'https://sigilweaver.app',
    baseUrl: '/blog/',

    organizationName: 'Sigilweaver',
    projectName: 'Blog',

    onBrokenLinks: 'warn',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: false,
                blog: {
                    routeBasePath: '/',
                    showReadingTime: true,
                    blogTitle: 'Sigilweaver Blog',
                    blogDescription: 'Notes from the Sigilweaver suite: open-format readers, MRI reconstruction, variant stores, columnar science.',
                    postsPerPage: 10,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        title: 'Sigilweaver Blog',
                        description: 'Notes from the Sigilweaver suite.',
                        copyright: `Copyright (c) ${new Date().getFullYear()} Sigilweaver.`,
                    },
                    editUrl: 'https://github.com/Sigilweaver/Blog/tree/main/',
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    filename: 'sitemap.xml',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        metadata: [
            { name: 'keywords', content: 'Sigilweaver, OpenProteo, BioLance, OpenKSpace, Lance, Arrow, mass spectrometry, variants, MRI, reverse engineering, file formats' },
            { name: 'description', content: 'Technical writeups from the Sigilweaver open-source suite.' },
        ],
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Sigilweaver',
            logo: {
                alt: 'Sigilweaver logo',
                src: 'img/logo.svg',
                href: 'https://sigilweaver.app',
                target: '_self',
            },
            items: [
                {
                    type: 'dropdown',
                    label: 'Projects',
                    position: 'left',
                    items: [
                        { label: 'OpenProteo', href: 'https://sigilweaver.app/openproteo/docs/' },
                        { label: 'BioLance', href: 'https://sigilweaver.app/biolance/docs/' },
                        { label: 'OpenKSpace', href: 'https://sigilweaver.app/openkspace/docs/' },
                        { label: 'OpenQVD', href: 'https://sigilweaver.app/openqvd/docs/' },
                        { label: 'OpenYXDB', href: 'https://sigilweaver.app/openyxdb/docs/' },
                        { label: 'DICOM-Atlas', href: 'https://sigilweaver.app/dicom-atlas/docs/' },
                        { label: 'All projects', href: 'https://sigilweaver.app/docs/' },
                    ],
                },
                { to: '/', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/Sigilweaver',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Suite',
                    items: [
                        { label: 'Site', href: 'https://sigilweaver.app' },
                        { label: 'Docs hub', href: 'https://sigilweaver.app/docs/' },
                    ],
                },
                {
                    title: 'Code',
                    items: [
                        { label: 'GitHub org', href: 'https://github.com/Sigilweaver' },
                        { label: 'Blog repo', href: 'https://github.com/Sigilweaver/Blog' },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        { label: 'RSS', href: '/rss.xml' },
                    ],
                },
            ],
            copyright: `Copyright (c) ${new Date().getFullYear()} Sigilweaver. Posts licensed CC-BY-SA 4.0 unless noted.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['rust', 'toml', 'bash', 'python'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
