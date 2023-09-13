"use strict";
// Interface for user interaction
Object.defineProperty(exports, "__esModule", { value: true });
var gateway_1 = require("./gatway/gateway");
var paymentAPI = function (_a) {
    var userInfo = _a.userInfo, amountToPay = _a.amountToPay, paymentService = _a.paymentService;
    // Call onto the function pay in the payment gateway
    var paymentGateway = new gateway_1.default(userInfo, amountToPay, paymentService);
    return paymentGateway.pay();
};
exports.default = paymentAPI;
