import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const BlogItem = ({ blogs, handleDelete }) => {
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div
            key={blog._id}
            className="border-b-2  p-2 flex justify-evenly gap-4 p-3 "
          >
            <div>
              <p className="text-slate-900 text-[14px] capitalize font-normal">
                {" "}
                By : {blog.author}
              </p>
              <h1 className="text-[24px] font-bold capitalize leading-[30px] mt-2">
                {blog.title}
              </h1>
              <p className="text-[#6B6B6B] font-normal text-[16px] my-4 leading-[20px]">
                {blog.content}{" "}
                <Link className="text-slate-900" to={`/blogs/${blog._id}`}>
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
              className="w-[200px] h-[200px] object-cover"
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
