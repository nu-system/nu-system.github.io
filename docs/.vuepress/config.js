module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "NU-system",
      description: "💪 一个无 UI 依赖的母版组件库系统",
    },
    "/en/": {
      lang: "en-US",
      title: "NU-system",
      description: "💪 A master components library without ui dependencies",
    },
  },
  ga: "UA-142729357-1",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  serviceWorker: true,
  themeConfig: {
    repo: "nu-system",
    repoLabel: "GitHub",
    docsRepo: "nu-system/nu-system.github.io",
    docsDir: "docs",
    docsBranch: "dev",
    sidebarDepth: 0,
    smoothScroll: true,
    locales: {
      "/": {
        label: "简体中文",
        selectText: "Language",
        ariaLabel: "Language",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [
          {
            text: "简介",
            link: "/intro/",
          },
          {
            text: "HTML",
            items: [
              {
                text: "Validator",
                link: "/html/validator/",
              },
            ],
          },
          {
            text: "CSS",
            items: [
              {
                text: "Intro",
                link: "/css/",
              },
              {
                text: "ACSS",
                link: "/css/acss/",
              },
              {
                text: "Button",
                link: "/css/button/",
              },
              {
                text: "Dialog",
                link: "/css/dialog/",
              },
              {
                text: "Toast",
                link: "/css/toast/",
              },
              {
                text: "Select",
                link: "/css/select/",
              },
              {
                text: "Input",
                link: "/css/input/",
              },
            ],
          },
          {
            text: "React",
            items: [
              {
                text: "Intro",
                link: "/react/",
              },
              {
                text: "Button",
                link: "/react/button/",
              },
              {
                text: "Img",
                link: "/react/img/",
              },
              {
                text: "Dialog",
                link: "/react/dialog/",
              },
              {
                text: "Toast",
                link: "/react/toast/",
              },
              {
                text: "Select",
                link: "/react/select/",
              },
              {
                text: "Avatar",
                link: "/react/avatar/",
              }
            ],
          },
          {
            text: "JS",
            items: [
              {
                text: "Intro",
                link: "/js/",
              },
              {
                text: "Dialog",
                link: "/js/dialog/",
              },
            ],
          },
          {
            text: "Vue",
            items: [
              {
                text: "Intro",
                link: "/vue/",
              },
              {
                text: "Button",
                link: "/vue/button/",
              },
              {
                text: "Dialog",
                link: "/vue/dialog/",
              },
              {
                text: "Axios-form",
                link: "/vue/axios-form/",
              },
            ],
          },
          {
            text: "React-native",
            items: [
              {
                text: "Intro",
                link: "/react-native/",
              },
              {
                text: "Button",
                link: "/react-native/button/",
              },
              {
                text: "Acss",
                link: "/react-native/acss/",
              },
              {
                text: "Grid",
                link: "/react-native/grid/",
              },
            ],
          },
        ],
      },
      "/en/": {
        label: "English",
        selectText: "中文",
        ariaLabel: "中文",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "Intro",
            link: "/intro/",
          },
          {
            text: "HTML",
            items: [
              {
                text: "Validator",
                link: "/en/html/validator/",
              },
            ],
          },
          {
            text: "CSS",
            items: [
              {
                text: "Intro",
                link: "/en/css/",
              },
              {
                text: "ACSS",
                link: "/en/css/acss/",
              },
              {
                text: "Button",
                link: "/en/css/button/",
              },
              {
                text: "Dialog",
                link: "/en/css/dialog/",
              },
              {
                text: "Toast",
                link: "/en/css/toast/",
              },
              {
                text: "Select",
                link: "/en/css/select/",
              },
              {
                text: "Input",
                link: "/en/css/input/",
              },
            ],
          },
          {
            text: "React",
            items: [
              {
                text: "Intro",
                link: "/en/react/",
              },
              {
                text: "Button",
                link: "/en/react/button/",
              },
              {
                text: "Img",
                link: "/en/react/img/",
              },
              {
                text: "Dialog",
                link: "/en/react/dialog/",
              },
              {
                text: "Toast",
                link: "/en/react/toast/",
              },
              {
                text: "Select",
                link: "/en/react/select/",
              }
            ],
          },
          {
            text: "JS",
            items: [
              {
                text: "Intro",
                link: "/en/js/",
              },
              {
                text: "Dialog",
                link: "/en/js/dialog/",
              },
            ],
          },
          {
            text: "Vue",
            items: [
              {
                text: "Intro",
                link: "/en/vue/",
              },
              {
                text: "Button",
                link: "/en/vue/button/",
              },
              {
                text: "Dialog",
                link: "/en/vue/dialog/",
              },
              {
                text: "Axios-form",
                link: "/en/vue/axios-form/",
              },
            ],
          },
          {
            text: "React-native",
            items: [
              {
                text: "Intro",
                link: "/en/react-native/",
              },
              {
                text: "Button",
                link: "/en/react-native/button/",
              },
              {
                text: "Acss",
                link: "/en/react-native/acss/",
              },
              {
                text: "Grid",
                link: "/en/react-native/grid/",
              },
            ],
          },
        ],
      },
    },
  },
};
