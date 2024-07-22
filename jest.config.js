
module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/",
      "\\.pnp\\.[^\\/]$",
      "\\.css$"
    ],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  };