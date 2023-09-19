import { expect, it } from "../lib/test";
import paymentAPI from "../src/app";

const paymentDetails = {
  userInfo: {
    cardNumber: "1234123412341234",
    expirationDate: (6000 + new Date().getTime()).toString(),
    securityCode: "745",
  },
  amountToPay: "100" as string,
  paymentService: "mastercard" as "mastercard" | "visa" | "momo" | "paypal",
};

// Test success cases

it("returns 200 Ok when payment successfull", () => {
  const response = paymentAPI(paymentDetails);

  return expect(response.status).toBe(200);
});

it("returns 'Payment Successfull' when when payment successfull", () => {
  const response = paymentAPI(paymentDetails);

  return expect(response.message).toBe("Payment Successfull");
});

// Test failure cases
it("returns 401 when userInfo provided is invalid", () => {
  const response = paymentAPI({ ...paymentDetails, userInfo: "" });

  return expect(response.status).toBe(401);
});

it("returns 'Authentication Error' when userInfo provided is invalid", () => {
  const response = paymentAPI({ ...paymentDetails, userInfo: "" });

  return expect(response.message).toBe("Authentication Error");
});

it("returns proper error body when userInfo provided is invalid", () => {
  const response = paymentAPI({ ...paymentDetails, userInfo: "" });

  return expect(Object.keys(response)).toEqual([
    "message",
    "timestamp",
    "status",
  ]);
});
