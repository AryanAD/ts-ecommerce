import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex flex-wrap justify-center w-full rounded">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

          <div>
            <TopSellers />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  );
}
