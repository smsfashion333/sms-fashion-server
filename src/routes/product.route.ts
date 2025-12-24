import { Router } from "express";
import { addProduct, getAllProduct } from "../controllers/product.controller";

const router = Router();

router.post("/", addProduct);

router.get('/',getAllProduct)

export default router;
