/// <reference types="cypress"/>

import AlertDoKoszyka from "../pageObjects/alertDoKoszyka";

context("Online Store Tests", () => {
  describe("PageObjects Tests", () => {
    beforeEach("Enter page and confirm policy", () => {
      cy.visit("www.stomatologia-medilab.pl");
      cy.url().should("contain", "stomatologia");
      cy.closePolicyWindow();
    });
    it("Adding items to the basket throught PageObjects", () => {
      AlertDoKoszyka.clickOnBtnDoKoszyka();
      AlertDoKoszyka.verifyAlertText();
      AlertDoKoszyka.btnZamow();
      AlertDoKoszyka.checkIfEqual();
    });
  });
});
