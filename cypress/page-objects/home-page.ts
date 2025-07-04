import { stradivariusTypeTestData } from "../utils/data/testData";

class StradivariusHomePage {
  //selectors
  private acceptCookiesButton = "#onetrust-accept-btn-handler";
  private locationFieldSelector = "[data-testid='autocomplete-container-test']";
  private openSuggestionsButtonSelector = "[aria-label='Open suggestions']";
  private listSuggestionSelector = "#suggestions-list";
  private languageBoxSelector = "[role='combobox']";
  private languageChoicesSelector = "#select-language-options";
  private buttonEnterSelector = "button[data-text='Enter']";

  // data for the class
  private stradivariusTestDataHomePage: stradivariusTypeTestData;

  constructor(testData: stradivariusTypeTestData) {
    this.stradivariusTestDataHomePage = testData;
  }

  public stradivariusHomePage() {
    this.stradivariusHomePageLoaded();
    this.stradivariusHomePageAcceptCookies();
    this.stradivariusHomePageChooseCountry();
    this.stradivariusHomePageLanguage();
    cy.get(this.buttonEnterSelector)
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  }
  private stradivariusHomePageLoaded() {
    cy.waitForPageLoad();
  }

  private stradivariusHomePageAcceptCookies() {
    cy.waitForClickable(this.acceptCookiesButton).click();
  }

  private stradivariusHomePageChooseCountry() {
    cy.get(this.locationFieldSelector).should("be.visible");
    cy.get(this.openSuggestionsButtonSelector).click();
    cy.get(this.listSuggestionSelector)
      .find("li")
      .then(($suggestions) => {
        if (this.stradivariusTestDataHomePage.homePage.country === "France") {
          const $frSuggestion = $suggestions.filter("#suggestion-FR");
          if ($frSuggestion.length) {
            cy.wrap($frSuggestion).click();
          }
        }
      });
  }

  private stradivariusHomePageLanguage() {
    cy.get(this.languageBoxSelector).should("be.visible").click();
    cy.get(this.languageChoicesSelector)
      .should("be.visible")
      .find("li")
      .then(($languages) => {
        if (
          this.stradivariusTestDataHomePage.homePage.language.toLowerCase() ===
          "français"
        ) {
          cy.get(this.languageChoicesSelector)
            .contains("li", /français/i)
            .click();
        }
      });
  }
}

export default StradivariusHomePage;
