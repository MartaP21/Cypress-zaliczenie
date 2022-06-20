/// <reference types="cypress"/>

context("Online Store Tests", () => {
  describe("Basic functionalities", () => {
    beforeEach("Enter page and confirm policy", () => {
      cy.visit("www.stomatologia-medilab.pl");
      cy.url().should("contain", "stomatologia");
      cy.closePolicyWindow();
      cy.fixture("searchProduct.json").as("product");
    });
    it("Banner scrolling test", () => {
      cy.get(".arrow-right > .glyphicon").click().checkElementsVisibility();
      cy.get(".arrow-left > .glyphicon").click().checkElementsVisibility();
    });
    it.skip("Banner links test", () => {
      //nie przechodzi
      cy.get(".swiper-slide-active > a > .img-responsive").click(
        { multiple: true },
        { force: true }
      );
    });
    it("Enter product detiles - by it's back side", () => {
      cy.get(
        ":nth-child(1) > .thumbnail > :nth-child(2) > .back-side-product"
      ).click();
      cy.url().should("contain", "24-961-05-zestaw-implantologiczny-eco");
      cy.get("#logo > a > img").click();
    });
    it("Enter product detiles - by it's name", () => {
      cy.get(
        ":nth-child(3) > .thumbnail > .caption > .name > .hint > .product_name"
      ).click();
      cy.get("h1").should("contain", "12.701.00Z Twist-Ex zestaw");
      cy.get("#logo > a > img").click();
    });
    it("Adding item to the chart - direct, from main page", () => {
      cy.get("#product_main_1624").click();
      cy.get(".modal-footer > .btn-primary").click();
      cy.get(".product-name > a").should("contain", "17.007.75TI");
      cy.get(":nth-child(1) > div.col-xs-6 > .form-control-static")
        .invoke("text")
        .then((cena1) => {
          cy.get("tbody > tr > .product-gross")
            .invoke("text")
            .then((cena2) => {
              expect(cena1.text).to.be.equal(cena2.text);
            });
        });
    });
    it("Adding item to the chart - indirect, from product page", () => {
      cy.get(':nth-child(4) > .thumbnail > :nth-child(2) > .back-side-product')
      .click();
      cy.get('#product-card_1433 > div > .btn').should("be.visible").click();
      cy.get(".modal-footer > .btn-primary").click();
      cy.url().should("contain", "basket");
    });
    it("Search field Tests - fixtures", () => {
      cy.get("#nav-button-search > .glyphicon").click();
      cy.get("#nav-search > .form-inline").checkElementsVisibility();
      cy.fixture("searchProduct")
        .then((products) => {
          cy.get("#nav-search > .form-inline")
            .type(products[0].product)
            .wait(3000);
          cy.get(
            "#nav-search > .form-inline >.input-group >.form-control "
          ).should("have.value", products[0].product);
        })
        .clear();
    });
    it("Search field Tests - fixtures and alias", () => {
      cy.get("#nav-button-search > .glyphicon").click();
      cy.get("#nav-search > .form-inline").should("be.visible");
      cy.fixture("searchProduct").as("prod");
      cy.get("#nav-search > .form-inline").clear();
      cy.get("@prod").then((products) => {
        cy.get("#nav-search > .form-inline")
          .type(products[1].product)
          .wait(3000);
        cy.get(
          "#nav-search > .form-inline >.input-group >.form-control "
        ).should("have.value", products[1].product);
      });
    });
    it("User login - negative case", () => {
      cy.visit("www.stomatologia-medilab.pl/user/loginUser");
      cy.get(".panel-title").checkElementsVisibility();
      cy.get("#st_form-user-email").type("negativeTest");
      cy.get("#st_form-user-password").type("pass");
      cy.get(".st_form_ver6 > .pull-right > .btn").click();
      cy.get(".control-label").should("be.visible");
    });
    it("User login - positive case", () => {
      cy.visit("www.stomatologia-medilab.pl/user/loginUser");
      cy.get(".panel-title").checkElementsVisibility();
      cy.get("#st_form-user-email").type("marta.86@wp.pl");
      cy.get("#st_form-user-password").type("u5PtHV7byDJwpMR");
      cy.get(".st_form_ver6 > .pull-right > .btn").click();
      cy.get(".panel-body > :nth-child(1)").should("be.visible");
    });
    it("Finding product throught navigation tree", () => {
      cy.get(".panel-body > .nav > :nth-child(1) > a").click();
      cy.get(
        ".panel-body > :nth-child(1) > :nth-child(2) > .nav > :nth-child(1) > a"
      )
        .should("be.visible")
        .click();
      cy.get(
        ".panel-body > :nth-child(1) > :nth-child(2) > .nav > :nth-child(1) > a"
      )
        .should("be.visible")
        .click();
      cy.get("#full-list").should("be.visible");
    });
    it("User login - negative case - fixtures", () => {
      cy.visit("www.stomatologia-medilab.pl/user/loginUser");
      cy.get(".panel-title").should("be.visible");
      cy.fixture("logInData").then((logIn) => {
        cy.get("#st_form-user-email").type(logIn[0].email).wait(3000);
        cy.get("#st_form-user-password").type(logIn[0].pass).wait(3000);
      });
      cy.get(".st_form_ver6 > .pull-right > .btn").click();
      cy.get(".control-label").should("be.visible");
    });
    it("User login - positive case - fixtures and alias", () => {
      cy.visit("www.stomatologia-medilab.pl/user/loginUser");
      cy.get(".panel-title").checkElementsVisibility();
      cy.fixture("logInData").as("log");
      cy.get("@log").then((logIn) => {
        cy.get("#st_form-user-email").type(logIn[1].email).wait(3000);
        cy.get("#st_form-user-password").type(logIn[1].pass).wait(3000);
      });
      cy.get(".st_form_ver6 > .pull-right > .btn").click();
      cy.get(".panel-body > :nth-child(1)").checkElementsVisibility();
    });
  });
});
