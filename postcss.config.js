const tailwindcss = require('tailwindcss')
// const postcssSass = require('@csstools/postcss-sass')
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/*.jsx',
    './public/**/*.html'
  ],
  whitelistPatterns: [/^\.txt-/],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    // ...[purgecss],
  ]
}