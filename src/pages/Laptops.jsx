import PageHeader from "../components/PageHeader";
import { LaptopsProducts } from "../data/LaptopsData";
import ProductGrid from "../components/ProductGrid";

export default function Laptops({ isDark = true }) {
  return (
    <div
      className={`min-h-screen font-sans relative overflow-x-hidden transition-colors duration-300
      ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
    >
      <PageHeader title='Ноутбуки' subtitle='Мощность десктопа в компактном корпусе' isDark={isDark} />
      <div className='relative z-10 max-w-6xl mx-auto px-6 py-12'>
        <ProductGrid products={LaptopsProducts} isDark={isDark} />
      </div>
    </div>
  );
}
