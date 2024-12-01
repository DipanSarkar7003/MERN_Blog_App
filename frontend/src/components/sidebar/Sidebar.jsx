import SideBlogItem from "../SideBlogItem/SideBlogItem";
import "./sidebar.css"
function Sidebar({ topics, sideBlog }) {
  return (
    <div className="p-4 sideBar">
      <div>
        <p className="mb-5 font-semibold text-[18px]">Recommended topics</p>

        <div className="topic-list flex flex-wrap gap-4">
          {topics.map((topic, index) => {
            return (
              <p
                key={index}
                className="pill bg-[#F2F2F2] rounded-3xl px-4 py-2 text-slate-800 capitalize"
              >
                {topic}{" "}
              </p>
            );
          })}
        </div>
      </div>
      <div className="px-4">
        <p className="mb-5 font-semibold text-[18px] mt-7">Popular blogs</p>

        <div className="popularBlogs pr-4">
          {sideBlog.map((blog, index) => {
            // console.log(blog);
            return <SideBlogItem key={index} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
