// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Colors and Code',
  transformers: {
    remark: {
      plugins: [
        'gridsome-remark-katex'
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './blog/**/*.md',
      },
      remark: {
        plugins: [
          'gridsome-remark-katex'
        ]
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-85741607-5'
      }
    }
  ],
  templates: {
    BlogPost: '/blog/:year/:month/:day/:title'
  }
}
