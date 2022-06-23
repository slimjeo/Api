/// <reference types="cypress" />

describe("First Api Job", function () {
  it("validate GET request", function () {
    cy.request("").then(function (response) {
      expect(response.body).have.property("url");
    });
  });
});
