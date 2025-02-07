const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const userDataRouter = require("./routes/userDataRoutes");

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

// Middleware CORS corrigé
app.use(
  cors({
    origin: process.env.FRONT_URL, 
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", authRouter);
app.use("/api", userDataRouter);

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});