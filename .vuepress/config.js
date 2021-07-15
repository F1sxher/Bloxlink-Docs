// .vuepress/config.js
module.exports = {
  plugins: ['@vuepress/back-to-top', '@vuepress/pwa', '@xiaopanda/vuepress-plugin-code-copy', {
    serviceWorker: true,
    updatePopup: true
  }],
  base: '/',
  theme: 'cool',
  //dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/faviconCustom.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}],
    
  ],
  smoothScroll: true,
  themeConfig: {
    // logo: '/.vuepress/public/favicon.ico',
    sidebar: {
      '/docs/': [
          '',
          {
              title: 'Bloxlink',
              path: '/docs/Bloxlink',
              collapsable: false,
              children: [
                './Bloxlink/FAQ',
                  {
                      title: 'Changelogs',
                      collapsable: true,
                      children: [
                          './Bloxlink/Changelog/Bloxlink',
                          './Bloxlink/Changelog/Website',
                          './Bloxlink/Changelog/Wiki',
                      ]  
                  },
              ]
          },
          {
              title: 'Commands',
              path: '/docs/Commands',
              collapsable: true,
              children: [
                {
                    title: 'Account',
                    path: '/docs/Commands/Account',
                    collapsable: true,
                    children: [

                    ]
                },
                {
                    title: 'Administration',
                    path: '/docs/Commands/Administration',
                    collapsable: true,
                    children: [

                    ]
                },
                {
                    title: 'Binds',
                    path: '/docs/Commands/Binds',
                    collapsable: true,
                    children: [

                    ]
                },
                {
                    title: 'Miscellaneous',
                    path: '/docs/Commands/Miscellaneous',
                    collapsable: true,
                    children: [

                    ]
                },
                {
                    title: 'Premium',
                    path: '/docs/Commands/Premium',
                    collapsable: true,
                    children: [

                    ]
                },
              ]
          },
          {
              title: 'Guides',
              path: '/docs/Guides',
              collapsable: true,
              children: [
                {
                    title: 'Verification',
                    path: '/docs/Guides/Verification',
                    collapsable: true,
                    children: [
                        './Guides/Verification/Verify.md',
                    ]
                } 
              ]
          },
      ]
    },
    sidebarDepth: 2,
    displayAllHeaders: false,
    activeHeaderLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/' },
      { text: 'Bloxlink Website', link: 'https://blox.link' },
      { text: 'Invite Bloxlink', link: 'https://blox.link/invite' },
      { text: 'Get Support', link: 'https://blox.link/support' },
      { text: 'Our Team', link: 'https://blox.link/team' },
      { text: 'Github', link: 'https://github.com/bloxlink/bloxlink' },
    ],
    lastUpdated: 'Last Updated', // string | boolean
      // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'FriendlyUser/vuepress-theme-cool-starter',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Github',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'FriendlyUser/ENGRYear4BNotes',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'

  },
  title: 'Bloxlink Documentation',
  description: 'Documentation for Bloxlink, a free, seamless Roblox bot for your Discord server.',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img'
      }
    }
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    }
  }
}