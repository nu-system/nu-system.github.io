module.exports = {
    title: 'NU-system',
    description: '一个 UI 和 Logic 完全分离的组件库系统',
    ga: 'UA-142729357-1',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    serviceWorker:true,
    themeConfig: {
        repo: 'nu-system',
        repoLabel: 'GitHub',
        editLinks: true,
        lastUpdated: '上次更新',
        editLinkText: '帮助我们改善此页面！',
        sidebarDepth: 3,
        sidebar: [
            {
                title: 'Vanilla',
                collapsable: false,
                children: [
                    '../vanilla/',
                    '../vanilla/button/',
                    '../vanilla/dialog/',
                    '../vanilla/toast/'
                ]
            },
            {
                title: 'React',
                collapsable: false,
                children: [
                    '../react/',
                    '../react/button/',
                    '../react/dialog/',
                    '../react/toast/'
                ]
            },
            {
                title: 'VUE',
                collapsable: false,
                children: [
                    '../vue/',
                    '../vue/button/',
                    '../vue/dialog/',
                    '../vue/axios-form/'
                ]
            },
            {
                title: 'React Native',
                collapsable: false,
                children: [
                    '../react-native/',
                    '../react-native/acss/',
                    '../react-native/grid/'
                ]
            },
        ]
    },
};
