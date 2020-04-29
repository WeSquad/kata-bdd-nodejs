"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
// import { expect } from 'chai'
var sparegame_1 = require("../../src/sparegame");
cucumber_1.Given('player made the following score {string}', function (scorep) {
    this.score = scorep;
});
cucumber_1.When('we calculate his final score', function () {
    this.gameResult = sparegame_1.spareGame(this.score);
});
cucumber_1.Then('the result should be {int}', function (total) {
    expect(this.gameResult).toEqual(total);
});
//# sourceMappingURL=spare.js.map