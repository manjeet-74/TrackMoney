import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./dbConfig/config";
import { transactionRoute } from "./routes/transaction";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello! I am root!");
});

connectDB();

app.use("/api", transactionRoute);

app.listen(port, () => {
  console.log(`Server is listening at PORT ${port}`);
});
