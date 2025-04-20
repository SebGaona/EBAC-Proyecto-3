module.exports = {
  moduleNameMapper: {
    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
