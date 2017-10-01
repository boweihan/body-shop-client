The front end for InsertName.

## Dependencies

* React
  * react
  * react-dom
  * react-form-validator-core
  * react-material-ui-form-validator
  * prop-types

* Create React App
  * react-scripts

* Redux
  * redux
  * react-redux
  * react-router
  * react-router-redux
  * redux-thunk

* Styling
  * node-sass-chokidar
  * material-ui

* Fetch
  * api-book
  * babel-polyfill
  * Api.js


### Runs the app in development mode

```bash
npm start
```

Open `http://localhost:3000` to view it in the browser.

### Runs the test watcher in an interactive mode

```bash
npm test
```

By default, runs tests related to files changes since the last commit.

### Builds the app for production to the build folder:

```bash
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

Reference: https://github.com/facebookincubator/create-react-app

### Deploys the production to github.io page

Changes package.json

```js
"homepage": "http://{account_name}.github.io/{project_name}",
"scripts": {
  "predeploy": "npm run build"
}
```

And runs

```bash
npm run deploy
```