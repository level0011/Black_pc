import PageHeader from "../components/PageHeader";
import { ALL_PRODUCTS } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function Periphery({ isDark = true }) {
  return (
    <div
      className={`min-h-screen font-sans relative overflow-x-hidden transition-colors duration-300
      ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
    >
 <PageHeader 
      title="ПЕРИФЕРИЯ" 
      subtitle="Побрекушки и всякая-всячина" 
      isDark={isDark} 
    />
      <div className='relative z-10 max-w-6xl mx-auto px-6 py-12'>
        <ProductGrid products={ALL_PRODUCTS.periphery} isDark={isDark} />
      </div>
    </div>
  );
}
