/// <reference types="cypress" />

describe("First Api Job", function () {
  /* it("validate GET request", function () {
    let Response = cy.request("https://api.teleport.org/api/cities/?search=Lagos");

    Response.its("status").should("eq", 200);
  });*/

  it("Second GET request", function () {
    cy.request("https://api.teleport.org/api/cities/geonameid%3A2/?embed=%5B0-9%5D%7B7%7");
  });
});
