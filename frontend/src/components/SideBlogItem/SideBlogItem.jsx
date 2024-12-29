import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function SideBlogItem({ blog }) {
  return (
    <div className="mb-4 border-b-2 pb-4">
      <Link to={`/blogs/${blog._id}`}>
        <p className="text-[14px] font-medium text-slate-700 capitalize ">
          by : {blog.author}
        </p>
        <h2 className="font-bold">{blog.title}</h2>
        <p className="text-xs text-slate-500 py-2">
          {Math.floor(Math.random() * 4)}d ago
        </p>
      </Link>
      <Link
        className="text-sm font-medium text-blue-700 tracking-wide"
        to={`/blogs/${blog._id}`}
      >
        Read more{" "}
        <span className="inline-block text-sm align-middle">
          <GoArrowUpRight color="blue" />
        </span>
      </Link>
    </div>
  );
}

export default SideBlogItem;
