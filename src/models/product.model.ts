interface Discount {
  type: "percentage" | "flat";
  value: string;
}

interface Variant {
  attributes: {
    color: string;
    size: string;
  };
  sku: string;
  price?: string;
  stock: number;
}

interface Seo {
  metaTitle: string;
  metaDescription: string;
}

export interface Product {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  basePrice: string;
  discount: Discount;
  sku: string;
  category: string;
  subCategory: string;
  stockQuantity: string;
  stockStatus: "in-stock" | "out-of-stock" | "pre-order";
  categoryId: string;
  subCategoryId: string;
  tags: string[];
  thumbnail: File | null;
  gallery: string[];
  variants: Variant[];
  seo: Seo;
  isDraft: boolean;
  featured: boolean;
}

interface PreviewImages {
  thumbnail: string | null;
  gallery: string[];
}
