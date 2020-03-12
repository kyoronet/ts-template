module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.(test|spec).(ts|js)'],
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.[jt]s'],
  silent: true,
  verbose: true
}
