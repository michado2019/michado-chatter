import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { NavbarLink } from "./navbarData/NavbarData";

type CustomNavLinkProps = {
  children: React.ReactNode;
  className: string;
};
type ToProps = {
  to: string;
};
const CustomNavLink = ({ to, ...props }: ToProps & CustomNavLinkProps) => {
  const activeStyle = {
    color: "#5d5d5d",
    transition: "all 0.3s ease-in-out",
  };
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeStyle : {})}
      to={to}
      end
      {...props}
    />
  );
};
const Navbar = (props: NavbarLink) => {
  return (
    <div className="navbarWrapper">
      <div className="navbarContents">
        <Link to="/" className="navbarLogo">
          Chatter
        </Link>
        <ul className="navbarLinksOne">
          {props.navbarLinks.map((navbarLink) => {
            return (
              <li key={navbarLink.id} className="navbarLink-list">
                <CustomNavLink
                  to={navbarLink.link}
                  className="navbarLinksOne-link"
                >
                  {navbarLink.name}
                </CustomNavLink>
              </li>
            );
          })}
        </ul>
        <div className="navbarLinksTwo">
          <Link to="/sign-in" className="navbarLinksTwo-link">
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="navbarLinksTwo-link"
            id="navbarLinksTwo-link"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
