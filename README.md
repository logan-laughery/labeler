# Labeler

> Beer Label editing
> (Uses [Labeler Server](https://github.com/logan-laughery/LabelerServer) for pdf generation)

## Screenshots

> Basic layout on larger screens with both preview and editor

![Desktop](/docs/Desktop.PNG?raw=true "Desktop")

> Editor page on mobile screen with color picker active

![Mobile #1](/docs/Mobile.PNG?raw=true "Mobile #1")

> Preview on mobile screen

![Mobile #2](/docs/Mobile2.PNG?raw=true "Mobile #2")

> Menu on mobile screen

![Mobile #3](/docs/Mobile3.PNG?raw=true "Mobile #3")


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deploy
``` bash
# configure config/prod.env.js to point at the deployed version of LabelerServer

# build for production
npm run build

# deploy to firebase store
firebase deploy

