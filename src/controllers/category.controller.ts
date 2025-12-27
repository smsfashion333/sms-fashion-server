import { Request, Response } from "express";
import {
  createCategories,
  getAllCategoriesService,
} from "../services/category.service";

export const addCategory = async (req: Request, res: Response) => {
  const categoryData = req.body;

  try {
    if (!categoryData) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const result = await createCategories(categoryData);

    if (result === "exit") {
      res.status(201).json({
        success: false,
        message: "Category Already exit",
        data: result,
      });

      return;
    }

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategoriesService();

    if (categories.length === 0) {
      res.status(301).json({
        success: true,
        message: "No data found in the db",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: categories,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
