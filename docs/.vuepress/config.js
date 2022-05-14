const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  base: "/play-my-life/",

  title: "Play My Life",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#ffc0cb" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [ "meta", { name: "google-site-verification", content: "9Yr8oGVaikdf_6-kdG1Kcko0Han0jMLCrh6bfkZN1Xg"}],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: [
      {
        title: "JS",
        collapsable: true,
        children: ["JS/js1.md", "JS/forEach_map.md", "JS/reference_type.md"],
      },
      {
        title: "React",
        collapsable: true,
        children: ["/React/react1.md", "/React/react2.md", "/React/react3.md"],
      },
      {
        title: "Vuepress",
        collapsable: true,
        children: ["/Vuepress/vuepress1.md"],
      },
      {
        title: "Github",
        collapsable: true,
        children: [
          "/Github/github1.md",
          "/Github/github2.md",
          "/Github/github3.md",
          "/Github/github4.md",
          "/Github/github5.md",
          "/Github/github6.md",
        ],
      },
      {
        title: "About_IT_Project",
        collapsable: true,
        children: ["/About_IT_Project/it_project.md"],
      },
      {
        title: "Django",
        collapsable: true,
        children: [
          "/Django/django0.md",
          "/Django/django1.md",
          "/Django/django2.md",
          "/Django/django3.md",
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
    [
      "sitemap",
      {
        hostname: "https://dohuiko.github.io/play-my-life/",
      },
    ],
    "@vuepress/plugin-back-to-top",
  ],
};
