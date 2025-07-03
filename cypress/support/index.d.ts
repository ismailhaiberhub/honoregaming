export {};
declare global {
  namespace Cypress {
    interface Chainable {
      waitForPageLoad(): Chainable<void>;
      waitForClickable(selector, options = {}): Chainable<void>;
      theBrowserisClean(): void;
    }
  }
}
