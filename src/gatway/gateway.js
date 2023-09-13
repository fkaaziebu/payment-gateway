"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var payment_services_1 = require("../pay/payment-services");
var PaymentGateway = /** @class */ (function () {
    function PaymentGateway(userInfo, amountToPay, paymentService) {
        this.userInfo = userInfo;
        this.amountToPay = amountToPay;
        this.paymentService = paymentService;
    }
    PaymentGateway.prototype.pay = function () {
        try {
            var paymentResults = new payment_services_1.default[this.paymentService](this.userInfo, this.amountToPay);
            return {
                message: "Payment Successfull",
                status: 200,
                service: this.paymentService,
            };
        }
        catch (error) {
            var timeOfError = new Date();
            return {
                message: error.msg,
                timestamp: new Date().getTime(),
                status: 400,
            };
        }
    };
    return PaymentGateway;
}());
exports.default = PaymentGateway;
