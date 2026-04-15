export default function PageHeader({ title, subtitle, isDark }) {
  return (
    <div className='flex flex-col items-center my-20 text-center'>
      {/* Основной заголовок h1 */}
      <h1
        className={`text-7xl md:text-8xl font-black uppercase tracking-[5px] transition-colors duration-300 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {/* С помощью split и map можно выделить первое слово цветом, как в твоем дизайне */}
        {title.split(" ")[0]}{" "}
        <span className='text-[#8860ff]'>{title.split(" ").slice(1).join(" ")}</span>
      </h1>

      {/* Опциональный подзаголовок */}
      {subtitle && (
        <p className='mt-4 text-gray-500 uppercase tracking-widest text-[10px]'>{subtitle}</p>
      )}
    </div>
  );
}
