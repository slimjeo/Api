/// <reference types="cypress" />

const { method } = require("cypress/types/bluebird");

describe("First Api Job", function () {
  it("Api test", function () {
    cy.request({
      method: "GET",
      url: "https://api.teleport.org/api/cities/?search=london",
    });
  });
});
