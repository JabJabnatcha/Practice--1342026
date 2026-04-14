import { mockProducts } from '../mock/product';

export interface Product {
  id: number;
  productName: string;
  productPrice: number;
  categories: string;
  stock: number;
  image: string;
  isDelete: boolean;
}

export const getAllProducts = async (): Promise<Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockProducts;
};

export const getProductById = async (id: number): Promise<Product> => {
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};