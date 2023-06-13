import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const AppRouter = () => {
  return (
    <div className="appRouter-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
