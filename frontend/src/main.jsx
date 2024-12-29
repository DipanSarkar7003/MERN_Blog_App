import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BlogContextProvider from "./context/BlogContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BlogContextProvider>
  </StrictMode>
);
