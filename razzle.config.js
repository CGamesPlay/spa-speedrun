"use strict";

module.exports = {
  plugins: [
    {
      name: "typescript",
      options: {
        forkTsChecker: {
          tslint: false,
        },
      },
    },
  ],
};
