/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("waitForPageLoad", () => {
  cy.document().should((doc) => {
    expect(doc.readyState).to.equal("complete");
  });
});

Cypress.Commands.add("theBrowserisClean", () => {
  cy.clearCookies();
});

Cypress.Commands.add("waitForClickable", (selector, options = {}) => {
  cy.get("body", options).then(($body) => {
    if ($body.find(selector).length > 0) {
      cy.get(selector, options)
        .should("be.visible")
        .and("not.be.disabled")
        .should(($el) => {
          const style = window.getComputedStyle($el[0]);
          expect(style.pointerEvents).to.not.equal("none");
        });
    } else {
      cy.log(`Element ${selector} not found in DOM, skipping waitForClickable`);
    }
  });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
