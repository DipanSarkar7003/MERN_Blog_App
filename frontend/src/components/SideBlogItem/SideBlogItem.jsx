import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function SideBlogItem({ blog }) {
  console.log(blog);
  return (
    <Link to={`/blogs/${blog._id}`}>
      <div className="mb-4 border-b-2 pb-4">
        <p className="text-[14px] font-medium text-slate-700 capitalize ">
          by : {blog.author}
        </p>
        <h2 className="font-bold">{blog.title}</h2>

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
    </Link>
  );
}

export default SideBlogItem;
