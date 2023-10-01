import { Link } from "react-router-dom";
import Logo from "./Logo";
import Container from "./Shared/Container";
import Theme from "./Theme";

const Header = () => {
  return (
    <div className="fixed w-full bg-gradient-to-r from-blue-900 from-10% via-sky-900 via-30% to-sky-800 to-90% z-10 shadow-sm">
      <div className="py-1">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="navbar flex flex-row-reverse justify-between">
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-outline btn-sm btn-success rounded-xl lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-md dropdown-content shadow text-center rounded w-52"
                >
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/resume">Resume</Link>
                </ul>
              </div>
              <Link to="/" className="btn btn-ghost normal-case text-xl ">
                <Logo />
              </Link>
            </div>
            <div className="hidden lg:flex gap-5 text-white">
              <Theme></Theme>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
