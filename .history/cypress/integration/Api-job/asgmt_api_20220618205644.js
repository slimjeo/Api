/// <reference types="cypress" />

describe("First Api Job", function () {
  it("validate GET request", function () {
    let Response = cy.request("https://api.teleport.org/api/cities/?search=Lagos");

    Response.its("status").should("eq", 200);
  });

  it("Scenerio: to return error 400 ");

  it("GET request_ to return error 404", function () {
    cy.request({
      url: "https://api.teleport.org/api/cities/geonameid%3A2/?embed=%5B0-9%5D%7B7%7D",
      failOnStatusCode: false,
    })
      .its("status")
      .should("eql", 404);
  });
});
