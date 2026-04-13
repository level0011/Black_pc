import { PRODUCTS } from "../data/PeripheryData";
import PageHeader from "../components/PageHeader";
import ProductGrid from "../components/ProductGrid";

export default function PeripheryPage({ isDark = true }) {
  return (
    <div
      className={`min-h-screen font-sans relative overflow-x-hidden transition-colors duration-300
      ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
    >
      {/* фоновый glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px]
          ${isDark ? "bg-violet-600/10" : "bg-violet-300/20"}`}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <PageHeader
          title="ПЕРИФЕРИЯ"
          subtitle="Побрекушки и всякая всячина"
          isDark={isDark}
        />

        <ProductGrid products={PRODUCTS} isDark={isDark} />
      </div>
    </div>
  );
}
