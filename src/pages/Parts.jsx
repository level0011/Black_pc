import PageHeader from "../components/PageHeader";
import { PartsProducts } from "../data/PartsData";
import ProductGrid from "../components/ProductGrid";

export default function Parts({ isDark = true }) {
  return (
    <div
      className={`min-h-screen font-sans relative overflow-x-hidden transition-colors duration-300
      ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
    >
<PageHeader 
      title="КОМПЛЕКТАЦИИ" 
      subtitle="Собери свой мощный Setup" 
      isDark={isDark} 
    />
      <div className='relative z-10 max-w-6xl mx-auto px-6 py-12'>
        <ProductGrid products={PartsProducts} isDark={isDark} />
      </div>
    </div>
  );
}
