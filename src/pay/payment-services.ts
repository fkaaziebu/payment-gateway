class MasterCard {
  userInfo: {
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
  };

  amountToPay: string;

  constructor(userInfo, amountToPay) {
    this.userInfo = userInfo;
    this.amountToPay = amountToPay;
  }

  master() {
    return "Results after payment using Mastercard";
  }
}

class VisaCard {
  userInfo: {
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
  };

  amountToPay: string;

  constructor(userInfo, amountToPay) {
    this.userInfo = userInfo;
    this.amountToPay = amountToPay;
  }

  visa() {
    return "Results after payment using Visacard";
  }
}

class MobileMoney {
  userInfo: {
    number: string;
  };

  amountToPay: string;

  constructor(userInfo, amountToPay) {
    this.userInfo = userInfo;
    this.amountToPay = amountToPay;
  }

  momo() {
    return "Results after payment using Mobile Money";
  }
}

class Paypal {
  userInfo: {
    email: string;
  };

  amountToPay: string;

  constructor(userInfo, amountToPay) {
    this.userInfo = userInfo;
    this.amountToPay = amountToPay;
  }

  paypal() {
    return "Results after payment using Paypal";
  }
}

export default {
  mastercard: MasterCard,
  paypal: Paypal,
  momo: MobileMoney,
  visa: VisaCard,
};
