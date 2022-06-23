/// <reference types="cypress" />

describe("First Api Job", function () {
  it("validate GET request", function () {
    cy.request("https://api.teleport.org/api/").then(function (response) {
      expect(response.body).have.value(200);
    });
  });
});
