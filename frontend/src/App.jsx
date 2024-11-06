import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList.jsx";
import CreateBlogPage from "./pages/CreateBlogPage";
import EditBlogPage from "./pages/EditBlogPage";
import BlogDetail from "./pages/BlogDetail";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/createBlog" element={<CreateBlogPage />} />
          <Route path="/editBlog" element={<EditBlogPage />} />
          <Route path="/blogDetail" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
