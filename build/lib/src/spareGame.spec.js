"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sparegame_1 = require("./sparegame");
describe('Playing ', function () {
    it('should return 0 if player missed all turns', function () {
        var input = '--,--,--,--,--,--,--,--,--,--';
        var output = 0;
        var result = sparegame_1.spareGame(input);
        expect(result).toEqual(output);
    });
});
//# sourceMappingURL=spareGame.spec.js.map