import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://playwright.dev',
  },
  env: {
    baseAPI: 'https://httpbin.org'
    }
  }  
)