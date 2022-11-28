import axios from "axios";

const getPaymentIntent = async price => {
  const res = await axios.post(
    "https://e-sell-server.vercel.app/create-payment-intent",
    {
      price,
    }
  );
  const secret = res.data;

  return secret;
};
export default getPaymentIntent;
