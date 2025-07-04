class StradivariusMainPage {
  //selectors

  private menuToggleButtonForMobileSelector = ".menu-mobile-toggle > button";
  private categoryJustInSelector = "[data-cy='Just in'] a";

  public userSelectJustInCategory() {
    cy.wait(5000);
    cy.get(this.menuToggleButtonForMobileSelector).click({ force: true });
    cy.wait(2000);
    cy.get(this.categoryJustInSelector).click();
  }
}

export default StradivariusMainPage;
