module.exports = {
    base:'/nu-system/',
    title: 'NU-system',
    description: '一个 UI 和 Logic 完全分离的组件库系统',
    themeConfig: {
        repo: 'yued-fe/nu-system',
        repoLabel: 'GitHub',
        editLinks: true,
        lastUpdated: '上次更新',
        editLinkText: '帮助我们改善此页面！',
        sidebarDepth: 3,
        nav: [
            {
                text: 'Components',
                items: [
                    { text: 'Button', link: '/packages/button/' },
                    { text: "Dialog", link: '/packages/dialog/' },
                ],
            },
        ],
        sidebar: [
            {
                title: '指南',
                collapsable: false,
                children: ['/guide/develop','/guide/deploy']
            },
            {
                title: 'Components',
                collapsable: false,
                children: ['/packages/button/','/packages/dialog/']
            }
        ]
    },
}
