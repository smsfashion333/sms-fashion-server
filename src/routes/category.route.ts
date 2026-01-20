import { Router } from "express";
import { addCategory, dropCategory, getAllCategories, updateCategoryStatusController } from "../controllers/category.controller";



const router = Router();

router.post("/", addCategory);

router.get("/", getAllCategories);
router.patch("/toggle-status/:id", updateCategoryStatusController);

router.delete("/drop-category/:id", dropCategory);

export default router;