# My Razzle App

This project is based on [SPA Speedrun](https://github.com/CGamesPlay/spa-speedrun) and [Razzle](https://github.com/jaredpalmer/razzle).

### Quick tips

- Include a CSS file globally using `import "./my.css"`.
- Import a [CSS module](https://github.com/css-modules/css-modules) using `import * as classNames from "./my.module.css"`.
- [Use environment variables](https://github.com/jaredpalmer/razzle#environment-variables) for configuration, and store them in a file called `.env` in the project root. 
- Hot module reloading can cause confusing behaviors on the server. If something feels off, use `rs` to [restart the server](https://github.com/jaredpalmer/razzle#rs).

## Usage

The scripts included with the template are:

- `yarn run start` Starts a development mode server with hot module reloading.
- `yarn run build` Builds the project for production deployment into the `build/` folder.
- `yarn run test` Starts a test watcher. Similar to running `jest --watch`.
- `yarn run lint` Runs ESLint.
- `yarn run start:prod` Runs the prebuilt application in the production environment.