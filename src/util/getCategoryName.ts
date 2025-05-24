import type { Category } from "@/types/category";

const womenCategory = "women's clothing";
const menCategory = "men's clothing";

export const getCategoryName = (category: Category) => {
  switch (category) {
    case "MALE":
      return menCategory;
      break;
    case "FEMALE":
      return womenCategory;
      break;
    default:
        return '';
      break;
  }
};

export const getCategoryNameByDisplayName = (category: string) => {
  switch (category) {
    case menCategory:
      return 'MALE';
      break;
    case womenCategory:
      return 'FEMALE';
      break;
    default:
        return '';
      break;
  }
};
