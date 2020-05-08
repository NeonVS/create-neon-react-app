const packageJson = `{
    "name": "react-app",
    "version": "1.0.0",
    "description": "",
    "main": "src/index.js",
    "scripts": {
      "start":"webpack-dev-server",
      "build": "rimraf dist && webpack --config webpack.prod.config.js --progress --profile --color"
    },
    "repository": {
      "type": "git",
      "url": ""
    },
    "keywords": [
      "React"
    ],
    "author": "",
    "license": "ISC",
    "bugs": {
      "url": ""
    },
    "homepage": "",
    "devDependencies": {
      "autoprefixer": "^7.1.5",
      "babel-core": "^6.26.0",
      "babel-loader": "^7.1.2",
      "babel-plugin-syntax-dynamic-import": "^6.18.0",
      "babel-preset-env": "^1.6.0",
      "babel-preset-react": "^6.24.1",
      "babel-preset-stage-2": "^6.24.1",
      "css-loader": "^0.28.7",
      "file-loader": "^1.1.5",
      "html-webpack-plugin": "^2.30.1",
      "postcss-loader": "^2.0.7",
      "style-loader": "^0.19.0",
      "url-loader": "^0.6.2",
      "webpack": "^3.6.0",
      "webpack-dev-server": "^2.9.1"
    },
    "dependencies": {
      "react": "16.8",
      "react-dom": "16",
      "react-router-dom": "4.2.2"
    }
  }
  `;
  module.exports = packageJson;