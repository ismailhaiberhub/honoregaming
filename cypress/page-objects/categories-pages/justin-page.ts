import { stradivariusTypeTestData } from "../../utils/data/testData";
import "cypress-iframe";

class JustInPage {
  //selectors
  private filterButtonSelector =
    ".sc-fUynIT > [data-cy='toggle-filters-button']";
  private filterCategoryColorsSelector =
    "[data-testid='category-grid-colors-filter']";
  private filterCategoryColorBlack =
    "[data-testid='grid-color-option-g-Negro']";
  private gridElements = "[data-cy='double'] [id^='grid-product-']";

  private gridElementForSize = "[data-cy='grid-product']";

  private sizeElementSelector = "[aria-label='M']";
  private wishListButtonSelector = "[data-cy='product-wishlist-button']";

  private wiewWishListButtonSelector = "[aria-label='Voir Wish List']";

  //Data for the class
  // data for the class
  private stradivariusTestDataJustIn: stradivariusTypeTestData;

  constructor(testData: stradivariusTypeTestData) {
    this.stradivariusTestDataJustIn = testData;
  }

  public filterOnJustInPage() {
    cy.waitForPageLoad();
    this.useFilterOnColor();
    this.applyFilter();
  }
  public chooseSizeMItems(item: number) {
    this.triggerTheSize(item);
  }

  public addItemToFavorite(itemsNumber: number) {
    cy.get(this.gridElements)
      .eq(itemsNumber)
      .find(this.wishListButtonSelector)
      .click({ force: true });
  }

  private useFilterOnColor() {
    cy.get(this.filterButtonSelector)
      .should("be.visible")
      .click({ force: true });
    cy.get(this.filterCategoryColorsSelector)
      .find(this.filterCategoryColorBlack)
      .filter('[style*="outline:orangered solid 2px"]')
      .should("have.length", 0);
  }

  private applyFilter() {
    cy.get("button")
      .contains("Appliquer les filtres")
      .should("be.visible")
      .and("be.enabled")
      .click({ force: true });
  }

  private triggerTheSize(itemsNumber: number) {
    cy.get(this.gridElements)
      .eq(itemsNumber)
      .scrollIntoView()
      .trigger("mouseover")
      .within(() => {
        cy.get(this.gridElementForSize)
          .find(this.sizeElementSelector)
          .find("button")
          .should("be.visible")
          .click({ force: true });
      });
  }

  public navigateToTheWishList() {
    cy.get(this.wiewWishListButtonSelector).click({ force: true });
  }
}

export default JustInPage;
