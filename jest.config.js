module.exports = {
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
    testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/node_modules/',
    ],
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '@constants': '<rootDir>/constants/index.js',
    },
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
        '/node_modules/(?!react-dnd|url-join|dnd-core|@react-dnd)',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
}
