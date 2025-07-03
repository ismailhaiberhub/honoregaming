import StradivariusHomePage from "../page-objects/home-page";
import StradivariusMainPage from "../page-objects/main-page";
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

context("Technical test for Honoré Gaming", () => {
  describe("Test stradivarius -  E2E ", () => {
    before(() => {
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
      it("03.01 - User filter on color Black ", () => {});
    });
  });
});
