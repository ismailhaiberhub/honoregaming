// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

Cypress.on("window:before:load", (win) => {
  win.console.log = () => {};
  win.console.info = () => {};
  win.console.debug = () => {};
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // ❗ Only return false if you're *sure* it's unrelated to test logic
  return false;
});
