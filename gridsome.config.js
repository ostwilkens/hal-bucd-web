// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'hal_bucd',
  siteUrl: 'https://ostwilkens.github.io/hal-bucd-web',
  pathPrefix: 'hal-bucd-web',
  siteDescription: 'sentri est',

  templates: {
    Post: '/:title'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md'
      }
    },
    {
      // Create members from yaml files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Member',
        path: 'content/members/*.yaml',
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
