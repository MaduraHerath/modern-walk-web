import ProductCard from '@/components/common/ProductCard';
import type { CategoryPageProps, IProduct } from '@/types/product';
import { getCategoryName } from '@/util/getCategoryName';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/products`);
        setProducts(res.data);
      } catch (err) {
        console.error('Failed to fetch products', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
    console.log(category)
  }, [category]);
  

  return (
    <div className="container py-5">
      <h4 className="fw-bold text-capitalize mb-4 text-center">{getCategoryName(category).replace('-', ' ')}</h4>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-2">Loading products...</p>
        </div>
      ) : (
        <div className="row g-4">
          {products.filter(products => products.category === getCategoryName(category)).map(product => (
            <ProductCard product ={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
