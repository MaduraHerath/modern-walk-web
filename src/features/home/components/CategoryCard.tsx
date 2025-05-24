import { AccentLine } from "@/components/common/AccentLine";
import type { CategoryCardProps } from "@/types/category";
import { Link } from "react-router-dom";

const CategoryCard = (params:CategoryCardProps) => {
  return (
    <div className="col-12 col-md-6">
       
      <div className="card h-100 border-0 shadow-sm">
        
        <img
          src={params.img}
          className="card-img-top img-fluid"
          alt="Men's Fashion"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />
          <AccentLine category={params.category} />
        <div className="card-body text-center">
          <h5 className="card-title">{params.title}</h5>
          <Link to={params.link} className={`btn btn-primary mt-2`}>
            {params.buttonText}
          </Link>
        </div>
           
      </div>
   
    </div>
  );
};

export default CategoryCard;
