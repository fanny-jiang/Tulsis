# Tulsi's Baby Shoe Store

E-commerce web app selling cute baby shoes. Built at Grace Hopper Program 1702-NY.

## Pre-requisites

**node >= 6.7.0**
If you don't have it, I might not work properly :(

## Installing

```sh
npm install
npm run dev
```

The `dev` script sets `NODE_ENV` to "development", runs the build script in watch mode, and
starts the server with `nodemon`. Build vs server logs are separated by a prefix. If you prefer
to run the server and build processes separately, you can instead do:

```sh
npm run start-dev
```

```sh
npm run build-dev
```

In two separate terminals. The vanilla `npm start` is for production — you won't use it in development!

## Running the tests

```sh
npm run test
npm run test-watch
```

## Contents

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup. It'll create the database for you if it doesn't exist,
assuming you're using postgres.

`/server` has the Express server and routes. `start.js` is the entry point.

`/bin` has scripts.

## Conventions

I use `require` and `module.exports` in `.js` files.

I use `import` and `export` in `.jsx` files, unless `require` makes for cleaner code.

I use two spaces, no semi-colons, and trailing commas where possible. I come with eslint.

## Quick Heroku deployment

1. Set up the [Heroku command line tools](https://devcenter.heroku.com/articles/heroku-cli) and install [Yarn](https://yarnpkg.com/en/) if you haven't already (`npm install -g yarn`)
2. `heroku login`
3. Add a git remote for heroku:
  - **If you're creating a new app...**
    1. `heroku create` or `heroku create your-app-name` if you have a name in mind.
    2. `heroku addons:create heroku-postgresql:hobby-dev` to add postgres
    3. `npm run deploy-heroku`. This will create a new branch and compile and commit your frontend JS to it, then push that branch to Heroku.
    4. `heroku run npm run seed` to seed the database

  - **If you already have a Heroku app...**
    1.  `heroku git:remote your-app-name` You'll need to be a collaborator on the app.

Afterwards,
  - *To deploy:* `npm run deploy-heroku`
  - *To re-seed:* `heroku run npm run seed`

The `watch` script watches the files for changes

## Built With

**React.js**
**React-Redux**
**PostgresQL**
**Node.js/Express.js**

## Authors

**[Christiane (Tina) Heiligers](https://github.com/TinaHeiligers)**
**[Fanny Jiang](https://github.com/fanny-jiang)**
**[Maria Schreiber](https://github.com/Meschreiber)**
**[Stefanie Sundby](https://github.com/ssundby)**

## Acknowledgements

**Instructors**
-[Ashi Krishnan](https://github.com/queerviolet)
-Ben Cohen

**Teaching Fellow**
-[Mariana Templin](https://github.com/goldienova)

**Last but not least...**
-Tulsi, _our store's namesake_