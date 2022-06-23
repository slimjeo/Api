/// <reference types="cypress" />

describe("First Api Job", function () {
  it("validate GET request", function () {
    let Response = cy.request("https://api.teleport.org/api/cities/?search=Lagos").then(function (Response) {
      expect(Response.body[1]).to.have.property("name", "lagos");
      expect(Response.status).equal(200);
    });

    // Response.its("status").should("eq", 200);
    // expect(Response.body[5]).to.have.property("name", "lagos");
  });
});
