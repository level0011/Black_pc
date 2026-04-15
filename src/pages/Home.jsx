import PageHeader from "../components/PageHeader";
import { LaptopsProducts } from "../data/LaptopsData";
import { PartsProducts } from "../data/PartsData";
import { PeripheryProducts } from "../data/PeripheryData";
import ProductGrid from "../components/ProductGrid";

const allProducts = [LaptopsProducts[0], PartsProducts[0], PeripheryProducts[0]].filter(Boolean);
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
        <ProductGrid products={allProducts} isDark={isDark} />
      </div>
    </div>
  );
}
