import {Link} from "react-router-dom";

const Navbar = () => {
  const navlist = [
    { title: "Home", path: "/" },
    { title: "Blogs", path: "/blogs" },
    { title: "Create", path: "/Create" },
    { title: "Contact", path: "/contact" },
  ];    

  return (
    <div>
      <nav>
        {" "}
        <ul>
          {navlist.map((item, index) => {
            return (
              <li key={index}>{<Link to={item.path}>{item.title}</Link>}</li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
