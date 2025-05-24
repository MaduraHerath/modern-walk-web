export type Category = 'MALE' | 'FEMALE' | '';

export interface CategoryCardProps {
  title: string;
  category: Category;
  buttonText: string;
  link: string;
  img: string;
}
