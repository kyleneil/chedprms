import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


// Import your routes

import promoRoutes from "./routes/promo.js"
import accountRoutes from "./routes/account.js"
import credentialsRoutes from "./routes/credentials.js"

const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
    "http://localhost:5173"
]

app.use(
    cors({
        origin: function(origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: "POST, GET",
        credentials: true,
    })
)

// Define your routes

app.use("/api/" , promoRoutes);
app.use("/api/" , accountRoutes);
app.use("/api/", credentialsRoutes)


// Start the Express server

app.listen(port, () => {
    console.log('API Working on port')
})

