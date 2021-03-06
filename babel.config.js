module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "babel-plugin-parameter-decorator",
    "babel-plugin-transform-typescript-metadata",
  ],
}
