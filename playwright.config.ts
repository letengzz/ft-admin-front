import process from 'node:process'
import { defineConfig, devices } from '@playwright/test'
import * as dotenv from 'dotenv'

// 加载环境变量
let env = dotenv.config({ path: './.env.development' }).parsed
if (!env) {
  env = dotenv.config().parsed
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: process.env.CI
      ? `http://localhost:${env?.VITE_PORT || 3000}`
      : `http://localhost:${env?.VITE_PORT || 3001}`,
    trace: 'on-first-retry',
    headless: !!process.env.CI,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  webServer: {
    command: process.env.CI ? 'pnpm run preview' : 'pnpm run dev',
    port: Number(env?.VITE_PORT) || (process.env.CI ? 3000 : 3001),
    reuseExistingServer: !process.env.CI,
  },
})
