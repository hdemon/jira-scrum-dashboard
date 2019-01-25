const presets = [
  [
    "@babel/preset-env",
    { targets: { browsers: "last 2 versions" } } // or whatever your project requires
  ],
  "@babel/preset-typescript",
  "@babel/preset-react"
]

const plugins = [
  "react-hot-loader/babel"
]

module.exports = { presets, plugins }
