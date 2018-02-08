require('./game.js');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai').use(sinonChai);

const { expect } = chai;


describe("The test environment", () => {
  it("should pass", () => expect(true).to.eq(true));
  it("should access game", () => expect(Game).not.to.be.undefined);
});

describe("Your specs...", () => {

  describe('#createRockQuestion', () => {

  });

  describe('#isPlayable', () => {

  });

  describe('#add', () => {

  });

  describe('#howManyPlayers', () => {

  });

  describe('#roll', () => {

  });

  describe('#wasCorrectlyAnswered', () => {

  });

  describe('#wrongAnswer', () => {

  });

});
