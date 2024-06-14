import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../features/auth/authSlice";
import LoginForm from "../features/auth/LoginForm";

//make it dynamic
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Membership Plans", path: "/membership-plans" },
  { name: "Class Schedule", path: "/class-schedule" },
  { name: "Contact", path: "/contact" },
  { name: "Dashboard", path: "/dashboard" },
];

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    dispatch(logoutUser());
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Gym Logo
                </span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  exact={item.exact}
                  className={({ isActive }) =>
                    isActive
                      ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold text-center"
                      : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 text-center"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="relative hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-700 font-semibold text-center">
                  Hello, {user.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 text-center"
                >
                  {authStatus === "loading" ? "Logging out ..." : "Logout"}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={toggleLogin}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                >
                  {authStatus === "loading" ? "Logging in ..." : "Login"}
                </button>
                {showLogin && <LoginForm />}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                exact={item.exact}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-4 text-green-500 font-semibold text-center"
                    : "block py-2 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300 text-center"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            {user ? (
              <div className="px-4 py-3 border-t border-gray-200 text-center">
                <span className="block text-gray-700 font-semibold">
                  Hello, {user.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full text-center"
                >
                  {authStatus === "loading" ? "Logging out ..." : "Logout"}
                </button>
              </div>
            ) : (
              <div className="px-4 py-3 border-t border-gray-200 text-center">
                <button
                  onClick={toggleLogin}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center"
                >
                  {authStatus === "loading" ? "Logging in ..." : "Login"}
                </button>
                {showLogin && <LoginForm />}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
