import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 360,
  viewportHeight: 734,
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "**/*.cy.{ts,js,jsx,tsx}",
    testIsolation: false,
    pageLoadTimeout: 20000,
    responseTimeout: 10000,
    defaultCommandTimeout: 10000,
    video: false,
    chromeWebSecurity: false,
  },
});
