"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("../lib/test");
var app_1 = require("../src/app");
var paymentDetails = {
    userInfo: {
        cardNumber: "1234123412341234",
        expirationDate: (6000 + new Date().getTime()).toString(),
        securityCode: "745",
    },
    amountToPay: "100",
    paymentService: "mastercard",
};
// Test success cases
(0, test_1.it)("returns 200 Ok when payment successfull", function () {
    var response = (0, app_1.default)(paymentDetails);
    return (0, test_1.expect)(response.status).toBe(200);
});
(0, test_1.it)("returns 'Payment Successfull' when when payment successfull", function () {
    var response = (0, app_1.default)(paymentDetails);
    return (0, test_1.expect)(response.message).toBe("Payment Successfull");
});
// Test failure cases
(0, test_1.it)("returns 401 when userInfo provided is invalid", function () {
    var response = (0, app_1.default)(__assign(__assign({}, paymentDetails), { userInfo: "" }));
    return (0, test_1.expect)(response.status).toBe(401);
});
(0, test_1.it)("returns 'Authentication Error' when userInfo provided is invalid", function () {
    var response = (0, app_1.default)(__assign(__assign({}, paymentDetails), { userInfo: "" }));
    return (0, test_1.expect)(response.message).toBe("Authentication Error");
});
(0, test_1.it)("returns proper error body when userInfo provided is invalid", function () {
    var response = (0, app_1.default)(__assign(__assign({}, paymentDetails), { userInfo: "" }));
    return (0, test_1.expect)(Object.keys(response)).toEqual([
        "message",
        "timestamp",
        "status",
    ]);
});
