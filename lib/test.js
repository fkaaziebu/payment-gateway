"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.it = void 0;
function it(testDescription, options) {
    console.log("".concat(testDescription, ": ").concat(options()));
}
exports.it = it;
function expect(response) {
    return {
        toBe: function (value) {
            return response === value ? "test passed" : "test failed";
        },
        toEqual: function (arrayValue) {
            // @ts-ignore
            for (var i = 0; i < (response === null || response === void 0 ? void 0 : response.length); i++) {
                // @ts-ignore
                if (arrayValue[i] !== response[i]) {
                    return "test failed";
                }
            }
            return "test passed";
        },
    };
}
exports.expect = expect;
