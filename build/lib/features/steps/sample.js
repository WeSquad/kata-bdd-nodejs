"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var chai_1 = require("chai");
cucumber_1.When('I want to log {string}', function (log) {
    this.log = log;
});
cucumber_1.Then('the response equals {string}', function (log) {
    chai_1.expect(log).to.equals(this.log);
});
//# sourceMappingURL=sample.js.map