# SnapShop - A Camera Shopping Cart

## Get Started

Install all dependencies and create the database used for development

```shell
npm install
createdb snapshop_dev
```

With the database created, we can now perform the migrations and seeds.

```shell
npm run knex migrate:latest
npm run knex seed:run
```

This application makes use of a SECRET needed for issuing JWTs.

```shell
bash -c 'echo "JWT_SECRET="$(openssl rand -hex 64)' > .env
```

To start the server, run `npm start`

## Assignment Parts

1. [HTML/CSS](1_scaffold_html.md)
1. [Angular Directives and Filters](2_Angular.md)

## Usage

The application's code lives in the `app` directory.

```shell
la app
```

Static files are placed in the `app/assets` directory and are copied to the `public` directory on build.

```shell
la app/assets
```

JS files are stored in `app` and are combined into the `public/app.js` file on build.

**NOTE:** Each JS file lives in a module so can be shared with other modules using [ES6 module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) syntax.

CSS stylesheets are placed in the `app/styles` directory and are combined into the `public/app.css` file on build.

```shell
la app/styles
```

On each build, the application's files are saved to the `public` directory and served by the HTTP server.

```shell
la public
```

Watch the project for changes and launch an HTTP server.

**NOTE:** Press `Ctrl + C` to quit.

```shell
npm start
```

In a new Terminal tab, navigate back the the project directory.

```shell
cd path/to/app
```

Take a look at the `public` directory to see what Brunch created.

```shell
la public
```

Open the application in your default browser.

```shell
open http://localhost:8000/
```

## Resources

- [Brunch](http://brunch.io)
