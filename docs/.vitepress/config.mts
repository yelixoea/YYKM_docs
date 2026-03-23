import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/YYKM_docs/',
  title: "云影空蒙",
  description: "一款基于 Android 原生开发的电视直播空壳软件",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍', link: '/introduction' },
          { text: '订阅源链接', link: '/channel-source-uri' },
          { text: '节目单链接', link: '/epg-source-uri' },
          { text: '操作方式', link: '/operate' },
        ]
      },
      {
        text: '使用指南',
        items: [
          { text: '订阅源格式', link: '/channel-source-content' },
          { text: 'URI链接', link: '/uri' },
          { text: '图片链接', link: '/image-uri' },
          { text: '回放格式', link: '/playback' },
          { text: '数据同步', link: '/sync' },
          { text: '特殊参数', link: '/spec-param' },
          { text: 'API接口', link: '/server-api' },
          { text: 'JavaScript', link: '/javascript' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yelixoea/YYKM' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
  }
})
