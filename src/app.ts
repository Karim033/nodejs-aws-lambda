import express from "express";
import serverless from "serverless-http";
import productRouter from "./Products/product.controller";

const app = express();

app.use(express.json());

app.use("/products", productRouter);

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).json("Not Found Handler");
  }
);

export const handler = serverless(app);
