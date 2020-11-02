[![GitHub issues](https://img.shields.io/github/issues/bamiogunfemi/react-redux-boilerplate.svg)](https://github.com/bamiogunfemi/react-redux-boilerplate/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/bamiogunfemi/react-redux-boilerplate.svg)](https://github.com/bamiogunfemi/react-redux-boilerplate/commits/master)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/bamiogunfemi/react-redux-boilerplate/README.md)](https://github.com/bamiogunfemi/react-redux-boilerplate/)

# React Redux Boilerplate

Opinionated React boilerplate + authentication using Redux, React Router Dom, Redux Thunk, Axios, and more.


## Dependencies

In order to use this setup you need to have installed the following dependencies:

1.  Node - min v8.15.0
2.  NPM - min v5.6.0
    or
3.  Yarn - min v1.3.2
4.  Bash terminal (Default on OSX/Linux, GitBash or similar on Windows)

## Download

You can download this setup [directly](https://github.com/bamiogunfemi/react-redux-boilerplate/archive/master.zip) and extract it.

Then navigate to the `react-redux-boilerplate` folder and proceed with the rest of the instructions.

## Install

```sh
yarn

# or

npm i
```

## Develop

```sh
yarn start

# or

npm start
```

## Build

```sh
yarn build

# or

npm run build
```

## Details

### JS

1.  Folder structure:

    -   `assets/` - all fonts, images, videos, etc.
    -   `components/` - stateless components.
    -   `helpers/` - helpers and utility functions
    -   `routes/`  - all routes
    -   `pages/`   - all pages
    -   `store/` - reducer, actions, operations, selectors, types, store, root reducers  and local storage
    -  

2.  Latest EcmaScript support

    -   Usage of the latest features in EcmaScript
    -   Using [Babel](https://github.com/babel/babel) to transpile to ES5
    -   Minification of the bundled file
    -   Source maps

3.  Webpack aliases: Checkout the aliases property in the `webpack.config.js` file.
4.  Choose your style: Freedom to plug in any styling of your choice.
5.  Lint your files: ESLint and Stylelint included
6.  Tests using Jest. The Test environment has been configured so you don't have to
7.  Offline first - using Offline Plugin to cache important files and assets
8.  PWA ready - Install as a native app on Android and iOS
9.  Report Web Vitals - Send any of results to an analytics endpoint to measure and track real user performance on your site.
10.  Code splitting and lazy loading

## Supported Browsers

This setup uses [Browserslist](https://github.com/browserslist/browserslist) to target browsers.

The default list of supported browsers is listed in the `package.json` file:

```json
{
	"browserslist": ["> 0.2%", "last version"]
}
```

This means that supported browsers vary based on current usage data and current browser versions.

In general, this setup supports the two most recent versions of all browsers.

## LICENSE

MIT
