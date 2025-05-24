import type { ProductCardProps } from "@/types/product";
import { getCategoryNameByDisplayName } from "@/util/getCategoryName";
import { AccentLine } from "./AccentLine";

const ProductCard = ({ product } :ProductCardProps) => {
  return (
    <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm border-0">
        <AccentLine category={getCategoryNameByDisplayName(product.category)} />
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top p-3"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title small mb-2">
            <strong>{product.title}</strong>
          </h6>
          <span className="card-title small mb-2">
            {product.description.split(" ").slice(0, 15).join(" ")}...
          </span>
          <p className="text-muted mb-2">${product.price.toFixed(2)}</p>
          {/* <button className="btn btn-sm btn-outline-primary mt-auto">
            View
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
