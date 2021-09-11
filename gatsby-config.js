require('dotenv').config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, ANALYTICS_ID } = process.env

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'my-portfolio'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-stylelint',
      options: { files: ['**/*.{js,jsx}'] }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: CONTENTFUL_SPACE_ID
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: ANALYTICS_ID
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID
        }
      }
    }
  ]
}
