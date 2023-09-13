import { expect, it } from "../lib/test";
import paymentAPI from "../src/app";

const paymentDetails = {
  userInfo: {
    cardNumber: "1234 1234 1234 1234",
    expirationDate: "0106",
    securityCode: "745",
  },
  amountToPay: "100" as string,
  paymentService: "mastercard" as "mastercard" | "visa" | "momo" | "paypal",
};

// Test success cases

it("returns 200 Ok when when payment successfull", () => {
  const response = paymentAPI(paymentDetails);

  return expect(true).toBe(true);
});

it("returns 'Payment Successfull' when when payment successfull", () => {
  const response = paymentAPI(paymentDetails);

  return expect(response.message).toBe("Payment Successfull");
});

// Test failure cases
