import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "王继民 - IT技术经理",
  description: "王继民个人简历网站 - 5年IT项目管理经验，精通Java、Vue全栈开发，专注企业级系统架构与AI场景落地实践",
  base: '/website/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      { 
        text: '📋 简历', 
        link: '/resume',
        activeMatch: '/resume'
      },
      { 
        text: '🚀 项目', 
        link: '/projects',
        activeMatch: '/projects'
      },
      { 
        text: '📞 联系', 
        link: '/contact',
        activeMatch: '/contact'
      }
    ],

    sidebar: [
      {
        text: '🌟 站点导航',
        items: [
          { text: '🏠 首页', link: '/' },
          { text: '📋 简历', link: '/resume' },
          { text: '🚀 项目', link: '/projects' },
          { text: '📞 联系', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangjimin' }
    ],

    footer: {
      message: '王继民个人简历网站',
      copyright: 'Copyright © 2024 王继民 - IT技术经理'
    }
  }
})
