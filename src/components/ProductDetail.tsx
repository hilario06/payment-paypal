import React from "react";
import { Link, useParams } from "react-router-dom";
import { products, Product } from "../data/products";
import PaypalButton from "./PaypalButton";

const ProductDetail: React.FC = () => {
  const productoId = useParams().id;
  if (!productoId) {
    return <h2>Product ID is missing</h2>;
  }

  const product: Product | undefined = products.find(
    (p) => p.id === parseInt(productoId)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 text-center">
        <div>
          <img className="rounded-t-lg" src={product.imagen} alt={product.name} />
        </div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <div>
          <Link to={`/`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Atrás
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link> 
        </div>
      </div>
      <PaypalButton price={product.price} description={product.description} />
    </div>
  );
};

export default ProductDetail;
