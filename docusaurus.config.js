// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Rooms In The Back",
    tagline: "Rooms In The Back website and wiki",
    favicon: "img/favicon.ico",

    url: "https://roomsintheback.com",
    baseUrl: "/",

    organizationName: "Nadwey",
    projectName: "roomsintheback-website",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    editUrl: "https://github.com/Nadwey/roomsintheback-website/blob/main/",
                },
                blog: {
                    showReadingTime: true,
                    editUrl: "https://github.com/Nadwey/roomsintheback-website/blob/main/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                logo: {
                    alt: "My Site Logo",
                    src: "img/roomsintheback.svg",
                },
                items: [
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        type: "doc",
                        position: "right",
                        docId: "index",
                        label: "Wiki",
                    },
                    {
                        href: "https://github.com/facebook/docusaurus",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.vsDark,
            },
        }),

    markdown: {
        format: "detect",
    },
};

export default config;
