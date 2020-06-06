# SPA Speedrun

[SPA Speedrun](https://github.com/CGamesPlay/spa-speedrun) is a project template for Node.js and React. The goal is that, by starting from this repo, you'll be able to start developing your new Node.js application in less than 5 minutes.

The template is built using [Razzle](https://github.com/jaredpalmer/razzle), so you get:

- A client application built in [React](https://reactjs.org).
- An [Express](https://expressjs.com) app that provides SSR for the client.
- Universal hot module replacement for both the client and the server.
- The same CSS setup as [create-react-app](https://github.com/facebookincubator/create-react-app).
- Escape hatches for customization via `.babelrc` and `razzle.config.js`.
- [Jest](https://github.com/facebook/jest) configuration.

Additionally, several other popular projects are integrated (using Razzle) and configured to work with each other:

- [ESLint](https://eslint.org) recommended settings with [Prettier](https://prettier.io) applied.
- React configured with ESLint recommended settings.
- [Typescript](https://www.typescriptlang.org) configured with ESLint recommended settings.

## Usage

To use this project template, simply download it to an empty directory and run it.

```bash
mkdir myproject
cd myproject
curl https://codeload.github.com/CGamesPlay/spa-speedrun/tar.gz/master | tar xf - --strip-components=1 spa-speedrun-master/template
yarn
yarn start
```

The project template [comes with a README](template/README.md) that includes some documentation.

## Contributing

Pull requests are appreciated! If your pull request is updating dependencies to a newer version, it will be accepted as long as all of the features of the project template continue working.

If you are interested in adding new a library or plugin to the template project, please ask me about it. Even if it's not something that I want to add to this template, I'd be happy to link to it in this readme so other people can find it.