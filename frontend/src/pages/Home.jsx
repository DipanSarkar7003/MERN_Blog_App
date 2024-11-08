import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="landing">
        <div className="landing-wrapper">
          <h1 className="landing-headding">
            Human <br />
            stories & ideas
          </h1>

          <p className="landing-page-para">
            A place to read, write, and deepen your understanding
          </p>

          <button className="btn-ui mr-2">
            {" "}
            <Link to="/blogs">Start reading</Link>{" "}
          </button>
          <button className="btn-ui-secondary">
            {" "}
            <Link to="/createBlog">Write something</Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
