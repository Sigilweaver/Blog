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

    plugins: ['docusaurus-plugin-llms-txt'],

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
            { name: 'keywords', content: 'Sigilweaver, OpenMassSpec, SpecLance, GenoLance, OpenKSpace, OpenSQLAnywhere, OpenQBW, Lance, Arrow, mass spectrometry, variants, MRI, accounting, reverse engineering, file formats' },
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
                        { label: 'OpenMassSpec', href: 'https://sigilweaver.app/openmassspec/docs/' },
                        { label: 'SpecLance', href: 'https://sigilweaver.app/speclance/docs/' },
                        { label: 'GenoLance', href: 'https://github.com/Sigilweaver/GenoLance' },
                        { label: 'OpenKSpace', href: 'https://sigilweaver.app/openkspace/docs/' },
                        { label: 'OpenQVD', href: 'https://github.com/Sigilweaver/OpenQVD' },
                        { label: 'OpenYXDB', href: 'https://sigilweaver.app/openyxdb/docs/' },
                        { label: 'OpenSQLAnywhere', href: 'https://sigilweaver.app/opensqlanywhere/docs/' },
                        { label: 'OpenQBW', href: 'https://sigilweaver.app/openqbw/docs/' },
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
