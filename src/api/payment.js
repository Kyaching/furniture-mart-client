import axios from "axios";

const getPaymentIntent = async price => {
  const res = await axios.post("http://localhost:5000/create-payment-intent", {
    price,
  });
  const secret = res.data;

  return secret;
};
export default getPaymentIntent;
