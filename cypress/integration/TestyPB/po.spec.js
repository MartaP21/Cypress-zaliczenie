/// <reference types="cypress"/>

import AlertDoKoszyka from "../TestyPB/pageObjects/alertDoKoszyka";

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
