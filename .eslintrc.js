module.exports = {
  plugins: ["auto-import"],
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "auto-import/auto-import": [
      2,
      {
        rootPath: "./src",
        packages: {
          d3: "d3",
          bloodhound: "Bloodhound",
          moment: "moment",
          alkali: {
            hasExports: "module-path/to/alkali",
          },
          dgrid: {
            modulesIn: "./bower_components/dgrid",
          },
          dstore: {
            modulesIn: "./bower_components/dstore",
          },
        },
      },
    ],
  },
};
