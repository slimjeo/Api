/// <reference types="cypress" />

const { method } = require("cypress/types/bluebird");

describe("First Api Job", function () {
  it("Api test", function () {
    cy.request({
      method: "GET",
      url: "https://developers.teleport.org/api/reference/#/",
    });
  });
});
