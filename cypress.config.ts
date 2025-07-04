import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 360,
  viewportHeight: 734,
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "**/*.cy.{ts,js,jsx,tsx}",
    testIsolation: false,
    pageLoadTimeout: 20000,
    responseTimeout: 20000,
    defaultCommandTimeout: 20000,
    video: false,
    chromeWebSecurity: false,
    experimentalOriginDependencies: true,
    experimentalMemoryManagement: true,
    experimentalModifyObstructiveThirdPartyCode: false,
  },
});
