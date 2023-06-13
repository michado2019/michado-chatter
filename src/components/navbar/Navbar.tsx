import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavbarLink } from "./navbarData/NavbarData";
import { MenuOutlined, CancelOutlined } from "@mui/icons-material";
import { CustomNavLink } from "../hooks/CustomNavLink";
import { SwitchContext } from "../contexts/switchContext/SwitchContext";

const Navbar = (props: NavbarLink) => {
  //useContexts
  const switchContext = useContext(SwitchContext); // This is a useContext for switch of navbar

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
        <div className="navbarMenu-div">
          {switchContext?.state ? (
            <CancelOutlined
              className="navbarMenu"
              onClick={() => switchContext?.setState(!switchContext?.state)}
            />
          ) : (
            <MenuOutlined
              className="navbarMenu"
              onClick={() => switchContext?.setState(!switchContext?.state)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
