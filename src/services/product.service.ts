import { client } from "../config/db";
import { Product } from "../models/product.model";

const productCollection = client
  .db("loweCommerce")
  .collection<Product>("products");

export async function createProduct(product: Product) {
  const result = await productCollection.insertOne(product);
  return result;
}
// const query = {
//   isDelete: false,
//   isDraft: { $ne: false },
//   featured: { $ne: false },
// };

export async function getAllProductService() {
  const query = { isDraft: false, featured: false, isDelete: false };

  console.log("Applying Query:", query);

  const result = await productCollection
    .find(query)
    .sort({ createdAt: -1 })
    .toArray();

  if (result.length > 0) {
    console.log(
      "First item isDraft value:",
      (result[0] as any).isDraft,
      typeof (result[0] as any).isDraft
    );
  }
  return result;
}
