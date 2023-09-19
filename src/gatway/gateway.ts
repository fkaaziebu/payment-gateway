import Services from "../pay/payment-services";

export default class PaymentGateway {
  amountToPay: any;
  userInfo: string;
  paymentService: "mastercard" | "visa" | "paypal" | "momo";

  constructor(userInfo, amountToPay, paymentService) {
    this.userInfo = userInfo;
    this.amountToPay = amountToPay;
    this.paymentService = paymentService;
  }

  pay() {
    try {
      const paymentServiceObject = new Services[this.paymentService](
        this.userInfo,
        this.amountToPay
      );

      paymentServiceObject.pay()

      return {
        message: "Payment Successfull",
        status: 200,
        service: this.paymentService,
      };
    } catch (error) {
      const timeOfError = new Date();
      return {
        message: error.message,
        timestamp: new Date().getTime(),
        status: 401,
      };
    }
  }
}
