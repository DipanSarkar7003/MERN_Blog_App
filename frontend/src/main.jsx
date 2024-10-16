import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./pages/Bloglist";
import CreateBlogPage from "./pages/CreateBlogPage";
import EditBlogPage from "./pages/EditBlogPage";
import BlogDetail from "./pages/BlogDetail";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/createBlog" element={<CreateBlogPage />} />
        <Route path="/editBlog" element={<EditBlogPage />} />
        <Route path="/blogDetail" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
