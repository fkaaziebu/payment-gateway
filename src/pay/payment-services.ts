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

  pay() {
    // Validate user information
    if (
      this.userInfo?.cardNumber?.length !== 16 ||
      this.userInfo?.expirationDate < new Date().getTime().toString() ||
      this.userInfo?.securityCode.length !== 3
    ) {
      throw Error("Authentication Error");
    }
    // Makes api call to mastercard service
    return this.master();
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

  pay() {
    // Makes api call to visa card service
    return this.visa();
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

  pay() {
    // Makes api call to mobile money service
    return this.momo();
  }

  momo() {
    return "Results after payment using Mobile Money service";
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

  pay() {
    // Makes api call to paypal service
    return this.paypal();
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
