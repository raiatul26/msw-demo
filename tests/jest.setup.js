import '@testing-library/jest-dom'
import { server } from '../mocks/server.js'
import 'cross-fetch/polyfill';
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())
