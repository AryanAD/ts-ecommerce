import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
