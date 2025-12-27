import { client } from "../config/db";
import { Category } from "../models/categories.model";

const categoryCollection = client
  .db("loweCommerce")
  .collection<Category>("categories");

export async function createCategories(categories: Category) {
  const isExist = await categoryCollection.findOne({ slug: categories.slug });

  if (isExist) {
    const result = "exit";
    return result;
  }

  const result = await categoryCollection.insertOne(categories);
  return result;
}

export async function getAllCategoriesService() {
  const result = await categoryCollection.find().toArray();

  return result;
}
