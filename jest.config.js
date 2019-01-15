module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/src/enzymeSetup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy"
  },
  collectCoverageFrom: ["**/src/**/*.{jsx|js}"]
}
