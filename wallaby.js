'use strict';

module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.ts',
      '!src/**/*Test.ts',
      '!src/**/*input.ts'
    ],
    tests: [
      'test/**/*Test.ts',
      'src/**/*Test.ts',
    ],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript(),
    },
    testFramework: 'jasmine',
    env: {
      type: 'node',
    },
  };
};
