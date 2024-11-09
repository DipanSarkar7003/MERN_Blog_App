import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineVerified } from "react-icons/md";
import "./blogitem.css";

const BlogItem = ({ blogs, handleDelete }) => {
  return (
    <div>
      {blogs.map((blog) => {
        const shortContent = blog.content.split(" ").slice(0, 20).join(" ");

        return (
          <div
            key={blog._id}
            className=" blogItem border-b-2  p-2 flex justify-between gap-4 p-3 "
          >
            <div>
              <p className="text-slate-900 text-[14px] capitalize font-normal inline-block">
                {" "}
                By : {blog.author}
                <span className="inline-block align-middle ms-1">
                  <MdOutlineVerified color="skyblue" />
                </span>
              </p>
              <h1 className="text-[24px] font-bold capitalize leading-[30px] mt-2 tracking-wide">
                {blog.title}
              </h1>
              <p className="text-[#6B6B6B] font-normal text-[16px] my-4 leading-[20px]">
                {shortContent}{" "}
                <Link
                  className="text-slate-900 font-semibold"
                  to={`/blogs/${blog._id}`}
                >
                  See more...
                </Link>
              </p>

              <button
                onClick={() => handleDelete(blog._id)}
                className="px-4 py-2 text-red-400 "
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <img
              className="w-[200px] h-[220px] object-cover"
              src={blog.image}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default BlogItem;
