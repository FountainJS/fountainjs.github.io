Usage
=====


## Requirements
You need at least Node `v4.0.0` and NPM `3`.


## Create your project
Install the needed tools:

```sh
$ npm i -g yo
```

Install `generator-fountain-webapp`

```sh
$ npm i -g generator-fountain-webapp
```
Make a new directory, and cd into it:

```sh
mkdir my-new-project && cd my-new-project
```

Run yo fountain-webapp:

```sh
yo fountain-webapp
```

## Yo options
`yo fountain-generator --help` or `yo fountain-generator -h` for help. All options are not required. If not provided, default values will be used.

* `--skip-cache` Do not remember prompt answers, default is `false`
* `--skip-install` Do not automatically install dependencies, default is `false`
* `--framework=(react|angular2|angular1)` Select a framework
* `--modules=(wepack|systemjs|inject)` Select a modules manager
* `--js=(babel|typescript|js)` Select a JS preprocessor
* `--css=(scss|less|css)` Select a CSS preprocessor


## Use NPM scripts

- `npm run build` to build an optimized version of your application in /dist
- `npm run serve` to launch a browser sync server on your source files
- `npm run serve:dist` to launch a server on your optimized application
- `npm run test` to launch your unit tests with Karma
- `npm run test:auto` to launch your unit tests with Karma in watch mode


## Or Gulp tasks

If you have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global packages you can use equivalent:

- `gulp` or `gulp build`
- `gulp serve`
- `gulp serve:dist`
- `gulp test`
- `gulp test:auto`


## Directory structure

Every component of the app get its own directory which contains the component code (depending on the framework, it can be `*.(js|ts)` or/and `*.component.(js|ts)` or/and `*.controller.(js|ts)` or/and `*.service.(js|ts)` and `*.spec.(js|ts)`.

- If you are coding in Angular 1.4 style, you can read
[Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub).
- Concerning Angular ≥ 1.5 and Angular 2, you can read [Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/).
- For React, you can read [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react).

**WARNING**: this directory structure implies you are using `Techs` template of the app. If not, it will be slightly different.

<pre>
├──  conf/
│    ├──  browsersync-dist.conf.js
│    ├──  browsersync.conf.js
│    ├──  gulp.conf.js
│    ├──  karma-auto.conf.js
│    ├──  karma.conf.js
│    ├──  webpack-dist.conf.js (optional)
│    └──  webpack-test.conf.js (optional)
│    └──  webpack.conf.js (optional)
│
├──  gulp_tasks/
│    ├──  browsersync.js
│    ├──  build.js (optional)
│    ├──  inject.js (optional)
│    ├──  karma.js
│    ├──  misc.js
│    ├──  scripts.js (optional)
│    ├──  styles.js (optional)
│    ├──  systemjs.js (optional)
│    └──  webpack.js (optional)
│
├──  bower_components/ (optional)
├──  jspm_packages/ (optional)
├──  nodes_modules/
├──  typings/ (optional)
│
├──  src/
│   ├──  app/
│   │   ├── techs/
│   │   │   ├──  tech.(js|ts)
│   │   │   ├──  tech.spec.(js|ts)
│   │   │   ├──  techs.(js|ts)
│   │   │   └──  techs.spec.(js|ts)
│   │   │
│   │   ├── footer.(js|ts)
│   │   ├── footer.spec.(js|ts)
│   │   ├── header.(js|ts)
│   │   ├── header.spec.(js|ts)
│   │   ├── main.(js|ts)
│   │   ├── main.spec.(js|ts)
│   │   ├── title.(js|ts)
│   │   └── title.spec.(js|ts)
│   │
│   ├── index.html
│   ├── index.(js|ts)
│   └── index.(css|less|scss)
│
├──  .babelrc (optional)
├──  .editorconfig
├──  .gitignore
├──  bower.json (optional)
├──  gulpfile.js
├──  jspm.config.js (optional)
├──  jspm.browser.js (optional)
├──  package.json
├──  tslint.json (optional)
└──  typings.json (optional)
</pre>


## Configuration

You can find the configuration files in `conf/`.

* *browsersync.conf(-dist).js*: define which folder to serve
* *gulp.conf.js*: contains the variables used in other gulp files which defines tasks
* *karma(-auto).conf.js*: contains Karma configuration for unit tests
* *webpack(-dist | test).js*: Webpack configuration with definition of loaders and plugins regarding the environment (dev, dist or test)


## Gulpfile

As the `gulp_tasks` folder contains all gulp tasks used by the project, the `gulpfile.js` centralize all processes by chaining the actual tasks.

It's made possible by the new Gulp 4 which allow to define precise task series and parallelization.


## Questions the generator will ask

- *Framework*: React, Angular 2, Angular 1
- *Modules manager*: Webpack with NPM, SystemJS with JSPM, None with Bower injection
- *CSS preprocessor*: SASS, Less, CSS
- *JS preprocessor*: ES2015 with Babel, Pure old JavaScript, TypeScript
- *Sample app*: A working landing page, A simple Hello Word, A TodoMVC
