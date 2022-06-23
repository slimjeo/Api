/// <reference types="cypress" />

describe("First Api Job", function () {
  it("validate GET request", function () {
    let Response = cy.request("https://api.teleport.org/api/cities/?search=Lagos");

    Response.its("status").should("eq", 200);
  });

  it("Second GET request", function () {
    let response = cy.request("https://api.teleport.org/api/cities/geoname_id%22%3A%200/").then(function (response) {
      expect(response.status).to.eq(200);
    });
  });
});
