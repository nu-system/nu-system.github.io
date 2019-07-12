module.exports = {
    title: 'NU-system',
    description: '💪 一个 推崇 UI 和 Logic 分离的组件库母版系统',
    ga: 'UA-142729357-1',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    serviceWorker: true,
    themeConfig: {
        repo: 'nu-system',
        repoLabel: 'GitHub',
        editLinks: true,
        docsRepo:'nu-system/nu-system.github.io',
        docsDir: 'docs',
        docsBranch: 'dev',
        lastUpdated: '上次更新',
        editLinkText: '帮助我们改善此页面！',
        sidebarDepth: 1,
        nav: [
            {
                text: 'Vanilla',
                items: [
                    {
                        text: 'Button',
                        link: '/vanilla/button/'
                    }, {
                        text: 'Dialog',
                        link: '/vanilla/dialog/'
                    }, {
                        text: 'Toast',
                        link: '/vanilla/toast/'
                    }
                ]
            }, {
                text: 'React',
                items: [
                    {
                        text: 'Button',
                        link: '/react/button/'
                    }, {
                        text: 'Dialog',
                        link: '/react/dialog/'
                    }, {
                        text: 'Toast',
                        link: '/react/toast/'
                    }
                ]
            }, {
                text: 'Vue',
                items: [
                    {
                        text: 'Button',
                        link: '/vue/button/'
                    }, {
                        text: 'Dialog',
                        link: '/vue/dialog/'
                    }, {
                        text: 'Axios-form',
                        link: '/vue/axios-form/'
                    }
                ]
            }, {
                text: 'React-native',
                items: [
                    {
                      text:'Button',
                      link:'/react-native/button/'
                    },
                    {
                        text: 'Acss',
                        link: '/react-native/acss/'
                    }, {
                        text: 'Grid',
                        link: '/react-native/grid/'
                    }
                ]
            },
        ],
        sidebar: [
            {
                title: 'Vanilla',
                collapsable: false,
                children: [
                    '/vanilla/',
                    '/vanilla/button/',
                    '/vanilla/dialog/',
                    '/vanilla/toast/',
                ]
            },
            {
                title: 'React',
                collapsable: false,
                children: [
                    '/react/',
                    '/react/button/',
                    '/react/dialog/',
                    '/react/toast/'
                ]
            },
            {
                title: 'VUE',
                collapsable: false,
                children: [
                    '/vue/',
                    '/vue/button/',
                    '/vue/dialog/',
                    '/vue/axios-form/'
                ]
            },
            {
                title: 'React Native',
                collapsable: false,
                children: [
                    '/react-native/',
                    '/react-native/button/',
                    '/react-native/acss/',
                    '/react-native/grid/'
                ]
            },
        ]
    },
};
