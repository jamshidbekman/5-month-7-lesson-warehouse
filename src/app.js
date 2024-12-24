import express from "express";
import connectDB from "./config/database.js";
import Routes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use("/api", ...Routes());

const bootstrap = async () => {
  try {
    await connectDB();
    console.log("database connected");
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log("Server is running port", PORT);
    });
  } catch (error) {
    console.error(error.message);
  }
};

bootstrap();
