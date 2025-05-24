import type { Category } from "./category";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category:string

}

export interface CategoryPageProps {
  category: Category;
}

export interface ProductCardProps {
  product: IProduct;
}