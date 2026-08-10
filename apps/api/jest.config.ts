const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\.(t|j)sx?$": [
      "ts-jest",
      { useESM: true, tsconfig: "tsconfig.json", module: "commonJS" },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

module.exports = config;
