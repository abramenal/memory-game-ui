module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  clearMocks: true,
  collectCoverageFrom: ['src/**/**.ts', 'src/**/**.vue', '!src/types/**.ts', '!src/local.ts', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 15,
      functions: 50,
      lines: 40,
      statements: 40,
    },
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
