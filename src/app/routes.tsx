import NotFoundPage from "@/features/misc/404/NotFoundPage";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/features/home/pages/HomePage"));
const CategoryPage = lazy(
  () => import("@/features/category/pages/CategoryPage")
);

const AppRoutes = () => {
  return (
      <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/mens-clothing"
            element={<CategoryPage category="MALE" />}
          />
          <Route
            path="/womens-clothing"
            element={<CategoryPage category="FEMALE" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

  );
};

export default AppRoutes;
