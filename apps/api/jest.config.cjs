module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
  moduleNameMapper: {
    // Strips .js extensions added for NodeNext ESM compatibility so Jest can find .ts source files
    "^(\\.{1,2}/.*)\\.js$": "$1",
    // Maps @repo/* to packages/*/src
    "^@repo/(.*)$": "<rootDir>/../../packages/$1/src",
  },
};
