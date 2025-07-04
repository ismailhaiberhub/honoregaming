class WishListPage {
  //selectors
  private wishListGridSelector = "[aria-labelledby='wishlist-heading']";

  public checkTheWishListSize(numberOfItemsExpected: number) {
    cy.get(this.wishListGridSelector)
      .invoke("attr", "setzier")
      .should("eq", numberOfItemsExpected);
  }
}

export default WishListPage;
