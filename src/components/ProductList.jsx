import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../utils/selectors";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useSelector(selectFilteredProducts);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
