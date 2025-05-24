import type { Category } from "@/types/category"

interface AccentLineProps {
  category: Category;
}

export const AccentLine = ({ category }:AccentLineProps) => {
  return <div className={`card-accent bg-${category?.toString().toLowerCase()}`} />;
};
