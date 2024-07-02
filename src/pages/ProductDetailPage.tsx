import ProductDetail from "../components/ProductDetail";

const ProductDetailPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg pb-4">Producto</h1>
      <ProductDetail />
    </div>
  );
};

export default ProductDetailPage;
