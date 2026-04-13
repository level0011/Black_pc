export default function PageHeader({ title, subtitle, isDark }) {
  return (
    <div className="text-center mb-12">
      <h1 className={`text-6xl md:text-7xl font-black tracking-tighter mb-3
        ${isDark ? "text-white" : "text-black"}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`text-sm tracking-[0.3em] uppercase
          ${isDark ? "text-white/30" : "text-black/30"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
