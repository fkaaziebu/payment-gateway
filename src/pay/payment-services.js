"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MasterCard = /** @class */ (function () {
    function MasterCard(userInfo, amountToPay) {
        this.userInfo = userInfo;
        this.amountToPay = amountToPay;
    }
    MasterCard.prototype.master = function () {
        return "Results after payment using Mastercard";
    };
    return MasterCard;
}());
var VisaCard = /** @class */ (function () {
    function VisaCard(userInfo, amountToPay) {
        this.userInfo = userInfo;
        this.amountToPay = amountToPay;
    }
    VisaCard.prototype.visa = function () {
        return "Results after payment using Visacard";
    };
    return VisaCard;
}());
var MobileMoney = /** @class */ (function () {
    function MobileMoney(userInfo, amountToPay) {
        this.userInfo = userInfo;
        this.amountToPay = amountToPay;
    }
    MobileMoney.prototype.momo = function () {
        return "Results after payment using Mobile Money";
    };
    return MobileMoney;
}());
var Paypal = /** @class */ (function () {
    function Paypal(userInfo, amountToPay) {
        this.userInfo = userInfo;
        this.amountToPay = amountToPay;
    }
    Paypal.prototype.paypal = function () {
        return "Results after payment using Paypal";
    };
    return Paypal;
}());
exports.default = {
    mastercard: MasterCard,
    paypal: Paypal,
    momo: MobileMoney,
    visa: VisaCard,
};
