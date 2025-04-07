import { Request, Response, Router } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json([
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
      { id: 3, name: "Product 3", price: 300 },
      { id: 4, name: "Product 4", price: 400 },
    ]);
  } catch (error) {
    console.error("An error ocurred:", error);
    res.status(500).json(error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      message: "Product created successfully",
    });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json(error);
  }
});

export default router;
