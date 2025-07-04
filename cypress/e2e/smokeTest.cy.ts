import JustInPage from "../page-objects/categories-pages/justin-page";
import StradivariusHeader from "../page-objects/components/header";
import StradivariusHomePage from "../page-objects/home-page";
import StradivariusMainPage from "../page-objects/main-page";
import WishListPage from "../page-objects/wish-list-page";
import {
  buildStradivariusTestData,
  stradivariusTypeTestData,
} from "../utils/data/testData";

const stradivariusTestData: stradivariusTypeTestData =
  buildStradivariusTestData();

const HOMEPAGE: StradivariusHomePage = new StradivariusHomePage(
  stradivariusTestData
);
const MAINPAGE: StradivariusMainPage = new StradivariusMainPage();
const JUSTINPAGE: JustInPage = new JustInPage(buildStradivariusTestData());
const WISHLISTPAGE = new WishListPage();
const HEADER = new StradivariusHeader();

context("Technical test for Honoré Gaming", () => {
  describe("Test stradivarius -  E2E ", () => {
    before(() => {
      cy.theBrowserisClean();
      cy.visit(Cypress.env("STRADIVARIUS_URL"));
    });
    describe("01- Home page", () => {
      it("01.01 - User chooses the country", () => {
        HOMEPAGE.stradivariusHomePage();
      });
    });

    describe("02- Main page", () => {
      it("02.01 - User chooses justIn Category ", () => {
        MAINPAGE.userSelectJustInCategory();
      });
    });

    describe("03- Just In page", () => {
      it.skip("03.01 - User filter on color Black ", () => {
        JUSTINPAGE.filterOnJustInPage();
      });
      it.skip("03.02 - User chooses seconde and third item", () => {
        JUSTINPAGE.chooseSizeMItems(1);
        JUSTINPAGE.chooseSizeMItems(2);
      });

      it.skip("03.03 - User chooses add the items to the wish list", () => {
        JUSTINPAGE.addItemToFavorite(1);
        JUSTINPAGE.addItemToFavorite(2);
      });

      it("03.04 - User filters on the price", () => {
        // Il n'y a pas la possibilité de filtrer sur une fourchette de prix
      });

      it.skip("03.05 - User navigates to the wish list", () => {
        JUSTINPAGE.navigateToTheWishList();
      });
    });

    describe("04 - Wish list page", () => {
      it.skip("04.01 - The user verifies the wish list", () => {
        WISHLISTPAGE.checkTheWishListSize(2);
      });
      it("04.02 - The user looks for an item", () => {
        HEADER.findAnItem("top");
      });
    });
  });
});
