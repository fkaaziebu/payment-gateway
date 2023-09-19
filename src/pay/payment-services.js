"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MasterCard = /** @class */ (function () {
    function MasterCard(userInfo, amountToPay) {
        this.userInfo = userInfo;
        this.amountToPay = amountToPay;
    }
    MasterCard.prototype.pay = function () {
        var _a, _b, _c, _d;
        // Validate user information
        if (((_b = (_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.cardNumber) === null || _b === void 0 ? void 0 : _b.length) !== 16 ||
            ((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.expirationDate) < new Date().getTime().toString() ||
            ((_d = this.userInfo) === null || _d === void 0 ? void 0 : _d.securityCode.length) !== 3) {
            throw Error("Authentication Error");
        }
        // Makes api call to mastercard service
        return this.master();
    };
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
    VisaCard.prototype.pay = function () {
        // Makes api call to visa card service
        return this.visa();
    };
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
    MobileMoney.prototype.pay = function () {
        // Makes api call to mobile money service
        return this.momo();
    };
    MobileMoney.prototype.momo = function () {
        return "Results after payment using Mobile Money service";
    };
    return MobileMoney;
}());
var Paypal = /** @class */ (function () {
    function Paypal(userInfo, amountToPay) {
        this.userInfo = userInfo;
        this.amountToPay = amountToPay;
    }
    Paypal.prototype.pay = function () {
        // Makes api call to paypal service
        return this.paypal();
    };
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
