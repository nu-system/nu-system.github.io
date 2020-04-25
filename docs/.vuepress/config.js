module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "NU-system",
      description: "💪 A master components library without ui dependencies",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "NU-system",
      description: "💪 一个无 UI 依赖的母版组件库系统",
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
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
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
        sidebar: [
          {
            title: "HTML",
            collapsable: false,
            children: ["/html/validator/"],
          },
          {
            title: "CSS",
            collapsable: false,
            children: [
              "/css/",
              "/css/acss/",
              "/css/button/",
              "/css/dialog/",
              "/css/toast/",
              "/css/select/",
            ],
          },
          {
            title: "JS",
            collapsable: false,
            children: ["/js/", "/js/dialog/"],
          },
          {
            title: "React",
            collapsable: false,
            children: [
              "/react/",
              "/react/img/",
              "/react/button/",
              "/react/dialog/",
              "/react/toast/",
              "/react/select/",
            ],
          },
          {
            title: "VUE",
            collapsable: false,
            children: [
              "/vue/",
              "/vue/button/",
              "/vue/dialog/",
              "/vue/axios-form/",
            ],
          },
          {
            title: "React Native",
            collapsable: false,
            children: [
              "/react-native/",
              "/react-native/button/",
              "/react-native/acss/",
              "/react-native/grid/",
            ],
          },
        ],
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [
          {
            text: "HTML",
            items: [
              {
                text: "Validator",
                link: "/zh/html/validator/",
              },
            ],
          },
          {
            text: "CSS",
            items: [
              {
                text: "Intro",
                link: "/zh/css/",
              },
              {
                text: "ACSS",
                link: "/zh/css/acss/",
              },
              {
                text: "Button",
                link: "/zh/css/button/",
              },
              {
                text: "Dialog",
                link: "/zh/css/dialog/",
              },
              {
                text: "Toast",
                link: "/zh/css/toast/",
              },
              {
                text: "Select",
                link: "/zh/css/select/",
              },
              {
                text: "Input",
                link: "/zh/css/input/",
              },
            ],
          },
          {
            text: "JS",
            items: [
              {
                text: "Intro",
                link: "/zh/js/",
              },
              {
                text: "Dialog",
                link: "/zh/js/dialog/",
              },
            ],
          },
          {
            text: "React",
            items: [
              {
                text: "Intro",
                link: "/zh/react/",
              },
              {
                text: "Button",
                link: "/zh/react/button/",
              },
              {
                text: "Img",
                link: "/zh/react/img/",
              },
              {
                text: "Dialog",
                link: "/zh/react/dialog/",
              },
              {
                text: "Toast",
                link: "/zh/react/toast/",
              },
              {
                text: "Select",
                link: "/zh/react/select/",
              },
            ],
          },
          {
            text: "Vue",
            items: [
              {
                text: "Intro",
                link: "/zh/vue/",
              },
              {
                text: "Button",
                link: "/zh/vue/button/",
              },
              {
                text: "Dialog",
                link: "/zh/vue/dialog/",
              },
              {
                text: "Axios-form",
                link: "/zh/vue/axios-form/",
              },
            ],
          },
          {
            text: "React-native",
            items: [
              {
                text: "Intro",
                link: "/zh/react-native/",
              },
              {
                text: "Button",
                link: "/zh/react-native/button/",
              },
              {
                text: "Acss",
                link: "/zh/react-native/acss/",
              },
              {
                text: "Grid",
                link: "/zh/react-native/grid/",
              },
            ],
          },
        ],
        sidebar: [
          {
            title: "HTML",
            collapsable: false,
            children: ["/zh/html/validator/"],
          },
          {
            title: "CSS",
            collapsable: false,
            children: [
              "/zh/css/",
              "/zh/css/acss/",
              "/zh/css/button/",
              "/zh/css/dialog/",
              "/zh/css/toast/",
            ],
          },
          {
            title: "JS",
            collapsable: false,
            children: ["/zh/js/", "/zh/js/dialog/"],
          },
          {
            title: "React",
            collapsable: false,
            children: [
              "/zh/react/",
              "/zh/react/img/",
              "/zh/react/button/",
              "/zh/react/dialog/",
              "/zh/react/toast/",
            ],
          },
          {
            title: "VUE",
            collapsable: false,
            children: [
              "/zh/vue/",
              "/zh/vue/button/",
              "/zh/vue/dialog/",
              "/zh/vue/axios-form/",
            ],
          },
          {
            title: "React Native",
            collapsable: false,
            children: [
              "/zh/react-native/",
              "/zh/react-native/button/",
              "/zh/react-native/acss/",
              "/zh/react-native/grid/",
            ],
          },
        ],
      },
    },
  },
};
