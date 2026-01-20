import { Request, Response } from "express";
import {
  createCategories,
  dropCategoryServer,
  getAllCategoriesService,
  updateCategoryStatusServer,
} from "../services/category.service";
import { ObjectId, ResumeToken } from "mongodb";

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

export const dropCategory = async (req: Request, res: Response) => {
  const id = req.params.id;

  const query = { _id: new ObjectId(id) };

  try {
    const isDropCategory = await dropCategoryServer(query);

    if (!isDropCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not deleted yet!!" });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: isDropCategory,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateCategoryStatusController = async (
  req: Request,
  res: Response,
) => {
  const id = req.params.id;

  if (!id) {
    return res.status(500).json({ success: false, message: "Id is require" });
  }
  try {
    const query = { _id: new ObjectId(id) };
    const status = req.body;

    if (!status) {
      return res
        .status(404)
        .json({ success: false, message: "Status not found" });
    }

    const payload = { query: query, status: status };
    const result = await updateCategoryStatusServer(payload);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Status not updated successfully" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Category Status updated successfully",
        data: result,
      });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
