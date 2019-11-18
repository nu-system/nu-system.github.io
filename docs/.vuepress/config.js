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
        docsRepo: 'nu-system/nu-system.github.io',
        docsDir: 'docs',
        docsBranch: 'dev',
        lastUpdated: '上次更新',
        editLinkText: '帮助我们改善此页面！',
        sidebarDepth: 0,
        nav: [
            {
                text: 'HTML',
                items: [
                    {
                        text: 'Validator',
                        link: '/html/validator/'
                    }
                ]
            },
            {
                text: 'CSS',
                items: [
                    {
                        text: 'Intro',
                        link: '/css/'
                    }, {
                        text: 'ACSS',
                        link: '/css/acss/'
                    },{
                        text: 'Button',
                        link: '/css/button/'
                    }, {
                        text: 'Dialog',
                        link: '/css/dialog/'
                    }, {
                        text: 'Toast',
                        link: '/css/toast/'
                    }
                ]
            }, {
                text: 'JS',
                items: [
                    {
                        text: 'Intro',
                        link: '/js/'
                    },
                    {
                        text: 'Dialog',
                        link: '/js/dialog/'
                    }
                ]
            }, {
                text: 'React',
                items: [
                    {
                        text: 'Intro',
                        link: '/react/'
                    }, {
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
                        text: 'Intro',
                        link: '/vue/'
                    }, {
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
                        text: 'Intro',
                        link: '/react-native/'
                    }, {
                        text: 'Button',
                        link: '/react-native/button/'
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
                title: 'HTML',
                collapsable: false,
                children: [
                    '/html/validator/'
                ]
            },
            {
                title: 'CSS',
                collapsable: false,
                children: [
                    '/css/',
                    '/css/acss/',
                    '/css/button/',
                    '/css/dialog/',
                    '/css/toast/',
                ]
            },
            {
                title: 'JS',
                collapsable: false,
                children: [
                    '/js/',
                    '/js/dialog/',
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
