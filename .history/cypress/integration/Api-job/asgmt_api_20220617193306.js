/// <reference types="cypress" />

describe("First Api Job", function () {
  it("validate GET request", function () {
    cy.request("https://api.teleport.org/api/cities/?search=Lagos").its("status").should;
  });
});
