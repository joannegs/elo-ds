import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: [
    "/node_modules/(?!lucide-react)/",
  ],
  coverageDirectory: './.coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/*.d.ts',
    '!app/**/*.stories.tsx',
    '!app/**/index.ts',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  verbose: false,
  silent: true,
  noStackTrace: true,
  testResultsProcessor: './node_modules/jest-sonar-reporter',
  coverageReporters: [
    'lcov',
    'json',
    'html',
  ],
};

export default config;
