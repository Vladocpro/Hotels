import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import * as validations from "./validations.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
import * as UserController from "./controllers/UserController.js";
import {config} from "dotenv";
import checkAuth from "./utils/checkAuth.js";
import * as HotelController from "./controllers/HotelController.js";
import * as ServiceController from "./controllers/ServiceController.js"
import * as PaymentController from "./controllers/PaymentController.js";
import * as UserHotelsController from "./controllers/UserHotelsController.js";
config();

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() =>  console.log("DB OK"))
    .catch((err) => console.log("DB error", err));


const app = express();
app.use(express.json());
app.use(cors());

app.post('/auth/register', validations.registerValidation, handleValidationErrors, UserController.register);
app.patch('/auth/patch', checkAuth, validations.registerValidation, handleValidationErrors, UserController.edit);
app.post('/auth/login',  validations.loginValidation, handleValidationErrors,UserController.login);
app.get('/auth/me', checkAuth, UserController.getMe);


app.get('/hotels', HotelController.getAllHotels);
app.get('/hotels/:id', HotelController.getOneHotel);
app.post('/hotels',  checkAuth, validations.hotelCreateValidation, handleValidationErrors, HotelController.createHotel);
app.delete('/hotels', checkAuth,HotelController.removeHotel);
app.patch('/hotels',checkAuth, validations.hotelCreateValidation, handleValidationErrors, HotelController.updateHotel);


app.get('/hotels/:id/services', ServiceController.getServices);
app.get('/hotels/:id/services/:serviceId', ServiceController.getService);
app.post('/hotels/:id/services',checkAuth, validations.hotelCreateServiceValidation, handleValidationErrors, ServiceController.createService);
app.delete('/hotels/:id/services/:serviceId',checkAuth, handleValidationErrors, ServiceController.removeService);
app.patch('/hotels/:id/services/:serviceId',checkAuth,validations.hotelCreateServiceValidation, handleValidationErrors, ServiceController.updateService);


app.get('/hotels/:id/payments', PaymentController.getPayments);
app.get('/hotels/:id/payments', PaymentController.getPaymentsByHotel);
app.post('/hotels/:id/services/:serviceId/payments', checkAuth, handleValidationErrors, PaymentController.createPayment);
app.delete('/hotels/:id/payments/:paymentId',checkAuth, handleValidationErrors, PaymentController.removePayment);
app.get('/userPayments/:id', PaymentController.getPaymentsByUser)

// app.patch('/hotels/:id/services/:serviceId/payments/:paymentId',checkAuth,validations.hotelCreateServiceValidation, handleValidationErrors, PaymentController.updatePayment);


app.get('/userHotels/:id', UserHotelsController.getUserHotels)
app.post('/userHotels', checkAuth,UserHotelsController.addHotel)
app.delete('/userHotels', checkAuth,UserHotelsController.removeHotel)
// app.post('/userHotels/:id/hotel/:hotelId', checkAuth,UserHotelsController.addHotel)

app.listen(4444, (err) => {
    if(err) {
        return console.log(err)
    }
    console.log("Server OK")
})

// const calculateOrderAmount = (items) => {
//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return 1400;
// };
//
// app.post("/create-payment-intent", async (req, res) => {
//     const { items } = req.body;
//
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(items),
//         currency: "gbp",
//         automatic_payment_methods: {
//             enabled: true,
//         },
//     });
//
//     res.send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });
//



// app.post("/create-payment-intent", async (req, res) => {
//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             currency: "USD",
//             amount: 1999,
//             automatic_payment_methods: { enabled: true },
//         });
//
//         // Send publishable key and PaymentIntent details to client
//         res.send({
//             clientSecret: paymentIntent.client_secret,
//         });
//     } catch (e) {
//         return res.status(400).send({
//             error: {
//                 message: e.message,
//             },
//         });
//     }
// });

// app.post('/create-checkout-session', async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//         line_items: [
//             {
//                 // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//                 price: '{{PRICE_ID}}',
//                 quantity: 1,
//             },
//         ],
//         mode: 'payment',
//         success_url: `${process.env.SERVER_URL}?success=true`,
//         cancel_url: `${process.env.SERVER_URL}?canceled=true`,
//     });
//
//     res.redirect(303, session.url);
// });

