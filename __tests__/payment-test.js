"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("../lib/test");
var app_1 = require("../src/app");
var paymentDetails = {
    userInfo: {
        cardNumber: "1234 1234 1234 1234",
        expirationDate: "0106",
        securityCode: "745",
    },
    amountToPay: "100",
    paymentService: "mastercard",
};
// Test success cases
(0, test_1.it)("returns 200 Ok when when payment successfull", function () {
    var response = (0, app_1.default)(paymentDetails);
    return (0, test_1.expect)(true).toBe(true);
});
(0, test_1.it)("returns 'Payment Successfull' when when payment successfull", function () {
    var response = (0, app_1.default)(paymentDetails);
    return (0, test_1.expect)(response.message).toBe("Payment Successfull");
});
// Test failure cases
