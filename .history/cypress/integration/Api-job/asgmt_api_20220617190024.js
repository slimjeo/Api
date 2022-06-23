/// <reference types="cypress" />

describe("First Api Job", function () {
  it("validate GET request", function () {
    cy.request("https://developers.teleport.org/api/reference/#/");
  });
});
