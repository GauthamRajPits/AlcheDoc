// playwright.config.ts

// Import necessary modules from Playwright.
import { defineConfig, devices } from '@playwright/test';

// Define the Playwright configuration using `defineConfig`.
export default defineConfig({
  // Specify the directory where test files are located.
  testDir: './tests',

  // Run tests in parallel to speed up execution.
  // This is a powerful feature for large test suites.
  fullyParallel: true,

  // Prevents using `test.only` in CI environments to ensure all tests run.
  forbidOnly: !!process.env.CI,

  // Retries failed tests in CI environments (e.g., Jenkins, GitHub Actions).
  // This helps with flaky tests due to network or timing issues.
  retries: process.env.CI ? 2 : 0,

  // Limits the number of parallel workers in CI to prevent resource exhaustion.
  workers: process.env.CI ? 1 : undefined,

  // Use the HTML reporter to generate a nice, interactive test report.
  // This report will be saved in the `playwright-report` directory.
  reporter: 'html',

  // Global `use` options that apply to all tests.
  use: {
    // Define the base URL for the application under test.
    // This allows tests to use relative paths like `await page.goto('/')`.
    baseURL: 'https://docquery-frontend-stage.mypits.org/',

    // Capture a trace of a test's execution on its first retry.
    // This is invaluable for debugging failed tests.
    trace: 'on-first-retry',
    headless: false,
    
  },

  // Define a list of projects (browsers) to run tests against.
  // This configuration runs tests on a single browser, Chromium.
  projects: [
    {
      name: 'chromium',
      // Use the settings for a standard desktop Chrome browser.
      use: { ...devices['Desktop Chrome'] },
    },
    // You can add more projects for different browsers or mobile devices.
    // For example: { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});