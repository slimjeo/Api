/// <reference types="cypress" />

const { method } = require("cypress/types/bluebird");

describe("First Api Job", function () {
  
  it("Api test", function () {
  
    method: 'url',
    url: 'https://api.teleport.org/api/cities/?search=london'

  });
});
