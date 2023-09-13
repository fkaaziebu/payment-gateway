// Interface for user interaction

import PaymentGateway from "./gatway/gateway";

// Using options to decide which payment service to use

// Use same API endpoint (eg. pay(options))

type InputProps = {
  userInfo: any;
  amountToPay: string;
  paymentService: "mastercard" | "visa" | "paypal" | "momo";
};

const paymentAPI = ({ userInfo, amountToPay, paymentService }: InputProps) => {
  // Call onto the function pay in the payment gateway
  const paymentGateway = new PaymentGateway(
    userInfo,
    amountToPay,
    paymentService
  );

  return paymentGateway.pay();
};

export default paymentAPI;
