import ProductCard from "../components/ui/ProductCard";
import { products } from "../data/products";
import CustomerAssurance from "../components/CustomerAssurance";

const Sofa = () => {
  const filteredProducts = products.filter(
    (product) => product.category === "sofa",
  );
  return (
    <>
      <section className="mx-auto w-full px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:gap-12">
          <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-12">
            <ProductCard products={filteredProducts} />
          </div>
        </div>
      </section>
      <CustomerAssurance />
    </>
  );
};

export default Sofa;
