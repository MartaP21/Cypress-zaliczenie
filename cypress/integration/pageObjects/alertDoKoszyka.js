class AlertDoKoszyka {
  get btnDoKoszyka() {
    return cy.get("#product_main_1631");
  }
  clickOnBtnDoKoszyka() {
    this.btnDoKoszyka.click();
  }
  verifyAlertText() {
    cy.on(".modal-title", (text) => {
      expect(text).to.equal("Produkt został dodany do koszyka");
    });
  }
  btnZamow() {
    cy.get(".modal-footer > .btn-primary").click();
  }
  btnKontynuujZakupy() {
    cy.get(".btn-default").click();
  }
  checkIfEqual() {
    cy.get(":nth-child(1) > div.col-xs-6 > .form-control-static")
      .invoke("text")
      .then((cena1) => {
        cy.get("tbody > tr > .product-gross")
          .invoke("text")
          .then((cena2) => {
            expect(cena1.text).to.be.equal(cena2.text);
          });
      });
  }
}

module.exports = new AlertDoKoszyka();
