/// <reference types="cypress" />

describe("First Api Job", function () {
  Cypress.config("baseUrl", "https://api.teleport.org/api/cities");

  it("validate GET request", function () {
    let Response = cy.request("/?search=Lagos");

    Response.its("status").should("eq", 200);
    expect(Response.body).to.not.be.null;
  });

  it("Scenerio: rsponse code 400 ", function () {
    cy.request({
      url: "/geoname_id%22%3A%200/?embed=%5B0-9%5D%7B7%7D",
      failOnStatusCode: false,
    })
      .its("status")
      .should("eql", 400);
  });

  it("GET request_ response code 404", function () {
    cy.request({
      url: "/geonameid%3A2/?embed=%5B0-9%5D%7B7%7D",
      failOnStatusCode: false,
    })
      .its("status")
      .should("eql", 404);
  });
});
