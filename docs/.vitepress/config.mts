import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "云影空蒙",
  description: "一款基于 Android 原生开发的电视直播空壳软件",

  base: '/YYKM_docs/',
  lang: 'zh',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    config(md) {
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'en':
              return 'Copy Code'
            case 'es':
              return 'Copiar código'
            case 'fa':
              return 'کپی کد'
            case 'ko':
              return '코드 복사'
            case 'pt':
              return 'Copiar código'
            case 'ru':
              return 'Скопировать код'
            case 'ja':
              return 'コードをコピー'
            default:
              return '复制代码'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'YYKM' }],
  ],

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
    ],


    editLink: {
      pattern: 'https://github.com/yelixoea/YYKM_docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2020-至今 yelixoea'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
  }
})
