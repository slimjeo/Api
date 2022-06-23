/// <reference types="cypress" />

describe("First Api Job", function () {
  it("validate GET request", function () {
    cy.request("https://api.teleport.org/api/reference/#!/root/getRoot").then(function (response) {
      expect(response.body).have.value(200);
    });
  });
});
