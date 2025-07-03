class StradivariusMainPage {
  //selectors

  private menuToggleButtonForMobileSelector = ".menu-mobile-toggle button";
  private categoryJustInSelector = "[data-cy='Just in']";

  public userSelectJustInCategory() {
    cy.get(this.menuToggleButtonForMobileSelector).click();
    cy.get(this.categoryJustInSelector).click();
  }
}

export default StradivariusMainPage;
