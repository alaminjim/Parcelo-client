import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/parcelo-logo.png";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handelSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("sign out successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(90deg, #714b67 20%, #432c3d 80%)",
        }}
        className="navbar shadow-sm"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-amber-50"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-16 h-16 rounded-full" src={logo} alt="" />
            <a className="text-xl text-amber-50">PARCELO</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-amber-50">{links}</ul>
        </div>
        <div className="navbar-end space-x-5">
          <button className="btn btn-ghost btn-circle bg-amber-50">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-20 rounded-full">
                    <img
                      title={user.displayName}
                      alt="al amin"
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>UserName: {user.displayName}</a>
                  </li>
                  <li>
                    <a>Dashboard</a>
                  </li>
                  <li>
                    <a onClick={handelSignOut}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="btn text-amber-50 text-lg shadow-none border-[#714b67]  bg-[#714b67]">
                Log in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
