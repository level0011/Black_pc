import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Laptops from "./pages/Laptops";
import Parts from "./pages/Parts";
import Periphery from "./pages/Periphery";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Layout isDark={isDark} setIsDark={setIsDark} setCurrentPage={setCurrentPage}>
      {currentPage === "home" && <Home isDark={isDark} />}
      {currentPage === "laptops" && <Laptops />}
      {currentPage === "parts" && <Parts />}
      {currentPage === "periphery" && <Periphery />}
    </Layout>
  );
}
