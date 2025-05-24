// src/features/home/pages/HomePage.tsx

import React from "react";
import CategoryCard from "../components/CategoryCard";
import FlashSaleView from "@/features/flashSale/FlashSaleView";


const HomePage: React.FC = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">Welcome to Modern Walk</h1>
      <p className="lead text-center mb-5">
        Discover the latest trends in fashion for everyone.
      </p>

      <FlashSaleView/>

      <div className="row g-4">
        <CategoryCard
          link="/mens-clothing"
          buttonText="Shop Men"
          category='MALE'
          title="Men's Clothing"
          key={0}
          img="/images/men-cloths.webp"
        />
        <CategoryCard
          link="/womens-clothing"
          buttonText="Shop Women"
          category='FEMALE'
          title="Women's Clothing"
          key={1}
          img="/images/women-cloths.webp"
        />
      </div>
    </div>
  );
};

export default HomePage;
