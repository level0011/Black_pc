import ProductCard from "./ProductCard";

export default function ProductGrid({ products, isDark }) {
  return (
    <div className='flex flex-wrap justify-center gap-8 mx-5'>
      {products.map(product => (
        <div
          key={product.id}
          className='w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[380px]'
        >
          <ProductCard product={product} isDark={isDark} />
        </div>
      ))}
    </div>
  );
}
