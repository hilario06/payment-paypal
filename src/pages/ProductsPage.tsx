import ProductList from "../components/ProductList";

const ProductsPage: React.FC = () => {
    return (
      <div className="p-4">
        <h1 className="text-lg pb-4">Products</h1>
        <ProductList />
      </div>
    );
  };
  
  export default ProductsPage;