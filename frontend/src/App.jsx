import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold py-5 text-zinc-700">
        Full Stack BLOG App
      </h1>

      <div className="w-full d-flex gap-[5rem] h-screen bg-zinc-100">
        <Link className="bg-green-200 p-2 mt-5 mr-2" to="/blogs">Blog List</Link>
        <Link className="bg-green-200 p-2 mt-5 mr-2" to="/createBlog">Create Blog</Link>
      </div>
    </div>
  );
}

export default App;
