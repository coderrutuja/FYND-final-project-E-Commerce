const razorpay = require('razorpay');
const instance = new razorpay({
  key_id: 'YOUR_RAZORPAY_API_KEY_ID',
  key_secret: 'YOUR_RAZORPAY_API_SECRET_KEY'
});

const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: amount * 100, // amount in paise
      currency: 'INR',
      receipt: 'order_receipt'
    };
    const order = await instance.orders.create(options);
    const orderId = order.id; // Assign orderId to order.id
    res.send({ orderId });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const capturePayment = async (req, res) => {
  try {
    const { paymentId, orderId, amount } = req.body;
    const payment = await instance.payments.capture(paymentId, amount * 100); // Multiply amount by 100 to convert it to paise
    res.send({ payment });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
