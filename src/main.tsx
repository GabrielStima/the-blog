import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { SinglePost } from "./pages/SinglePost";
import { CategoryPage } from "./pages/CategoryPage";
import "./assets/css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
