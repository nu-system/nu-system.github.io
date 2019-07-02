module.exports = {
    title: 'NU-system',
    description: '一个 推崇 UI 和 Logic 分离的组件库系统',
    ga: 'UA-142729357-1',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    serviceWorker: true,
    themeConfig: {
        repo: 'nu-system',
        repoLabel: 'GitHub',
        editLinks: true,
        lastUpdated: '上次更新',
        editLinkText: '帮助我们改善此页面！',
        sidebarDepth: 2,
        nav: [
            {
                text: 'Vanilla',
                items: [
                    {
                        text: 'button',
                        link: '/vanilla/button/'
                    }, {
                        text: 'dialog',
                        link: '/vanilla/dialog/'
                    }, {
                        text: 'toast',
                        link: '/vanilla/toast/'
                    }
                ]
            }, {
                text: 'React',
                items: [
                    {
                        text: 'button',
                        link: '/react/button/'
                    }, {
                        text: 'dialog',
                        link: '/react/dialog/'
                    }, {
                        text: 'toast',
                        link: '/react/toast/'
                    }
                ]
            }, {
                text: 'Vue',
                items: [
                    {
                        text: 'button',
                        link: '/vue/button/'
                    }, {
                        text: 'dialog',
                        link: '/vue/dialog/'
                    }, {
                        text: 'axios-form',
                        link: '/vue/axios-form/'
                    }
                ]
            }, {
                text: 'React-native',
                items: [
                    {
                      text:'button',
                      link:'/react-native/button/'
                    },
                    {
                        text: 'acss',
                        link: '/react-native/acss/'
                    }, {
                        text: 'grid',
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
