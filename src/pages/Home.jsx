import PageHeader from "../components/PageHeader";
import { ALL_PRODUCTS } from "../data/products";
import ProductGrid from "../components/ProductGrid";

const featuredProducts = [
    ALL_PRODUCTS.laptops[0],
    ALL_PRODUCTS.parts[1], // Например, RTX 5090
    ALL_PRODUCTS.periphery[0]
  ].filter(Boolean);
export default function Home({ isDark }) {
  return (
    <div className='min-h-screen font-sans relative overflow-x-hidden transition-colors duration-300'>
      <PageHeader
        title='Black Home'
        subtitle='Добро пожаловать в мир кастомных решений'
        isDark={isDark}
      />

      {/* Сетка товаров */}
      <div className='relative z-10 max-w-6xl mx-auto px-6 py-12'>
        <ProductGrid products={featuredProducts} isDark={isDark} />
      </div>
    </div>
  );
}
