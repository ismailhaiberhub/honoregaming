class StradivariusHeader {
  //selectors

  private findItemsButtonSelector =
    ".new-header-menu-mobile-search-toggle-grid > .clickable-area";
  private searchFieldSelector = "[data-testid='input-search']";
  private headerSearchElementSelector = "[data-cy='search-results-header']";

  private listItemsAfterSearchSelecor =
    "[aria-labelledby='search-results-heading'] [role='listitem']";

  public findAnItem(item: string) {
    cy.get(this.findItemsButtonSelector).as("search").click();
    cy.get(this.searchFieldSelector).type(`${item}{enter}`);
    this.checkTheSearch(item);
    this.checkListItems();
  }

  private checkTheSearch(item: string) {
    cy.get(this.headerSearchElementSelector).find("h1").contains(item);
  }

  private checkListItems() {
    cy.get(this.listItemsAfterSearchSelecor)
      .its("length")
      .should("be.greaterThan", 0);
  }
}

export default StradivariusHeader;
