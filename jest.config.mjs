export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/test/**/*.test.tsx'],
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
    moduleNameMapper: {
        '^@$': '<rootDir>/src',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@unikue/react-condition$': '<rootDir>/src',
        '^@unikue/react-condition/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: './tsconfig.test.json'
        }]
    }
};
