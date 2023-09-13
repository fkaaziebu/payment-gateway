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
    };
}
exports.expect = expect;
