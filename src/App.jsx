import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Laptops from "./pages/Laptops";
import Parts from "./pages/Parts";
import Periphery from "./pages/Periphery";
import CartPage from "./pages/CartPage";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Layout isDark={isDark} setIsDark={setIsDark} setCurrentPage={setCurrentPage}>
      {currentPage === "home" && <Home isDark={isDark} />}
      {currentPage === "laptops" && <Laptops isDark={isDark} />}
      {currentPage === "parts" && <Parts isDark={isDark} />}
      {currentPage === "periphery" && <Periphery isDark={isDark} />}
      {currentPage === "cart" && <CartPage isDark={isDark} setCurrentPage={setCurrentPage} />}
      
    </Layout>
  );
}
