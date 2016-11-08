# angular-webpack-boilerplate

This is a boilerplate setup for building an Angular 2 app using WebPack as a module bundler.
The setup is taken straight from the [Angular website](https://angular.io/docs/ts/latest/guide/webpack.html).

### Run in dev mode
```
npm start
```
The app will be available from localhost:8080.
The files are served using `webpack-dev-server`.

### Build for production
```
npm run build
```
The files will be output to the `dist/` directory in the root of the project.

### Run tests
```
npm test
```
Will start Karma and run all tests.