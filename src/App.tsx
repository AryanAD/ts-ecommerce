import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import ProductPage from "./ProductPage";
import TopSellers from "./TopSellers";
import PopularBlogs from "./PopularBlogs";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex flex-wrap justify-between w-full rounded">
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
