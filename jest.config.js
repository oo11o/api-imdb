/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  moduleDirectories: ['node_modules'],
  testEnvironment: "node",

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  transform: {
    // '^.+\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: false,
      },
    ],
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/__fixtures__/",
    "/src/config/",
  ],

  collectCoverageFrom: [
    '**/*.{ts,js}',
    '!**/inversify.config.ts', // Виключаємо цей файл з покриття
    '!**/node_modules/**', // Виключаємо node_modules
  ],

  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
     '!**/inversify.config.ts',
  ],

};