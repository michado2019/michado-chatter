import { useContext } from "react";
import "./SmallScreenNav.css";
import { SwitchContext } from "../../contexts/switchContext/SwitchContext";
import { Link } from "react-router-dom";
import { CustomNavLink } from "../../hooks/CustomNavLink";
import { NavbarLink } from "../navbarData/NavbarData";
import { Avatar } from "@mui/material";
import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const SmallScreenNav = (props: NavbarLink) => {
  //useContexts
  const switchContext = useContext(SwitchContext); // This is a useContext for switch of navbar
  return (
    <div
      className="smallScreenNav-wrapper"
      style={{
        marginLeft: switchContext?.state ? "0" : "-2000px",
        transition: "all 0.5s",
      }}
    >
      <div className="smallScreenNav-contents">
        <div className="smallUser-div">
          <Avatar className="smallScreen-user_avatar" />
          <h2 className="smallScreen-user_name">Chatter</h2>
        </div>
        <ul className="smallScreenLinksOne">
          {props.navbarLinks.map((smallScreenLink) => {
            return (
              <li key={smallScreenLink.id} className="smallScreenLink-list">
                <CustomNavLink
                  to={smallScreenLink.link}
                  className="smallScreenLinksOne-link"
                >
                  {smallScreenLink.name}
                </CustomNavLink>
              </li>
            );
          })}
        </ul>
        <div className="smallScreen-sign_instructionDiv">
          <h2 className="smallScreen-sign_instruction">
            Sign up or log in to your Chatter account.
          </h2>
          <p className="smallScreen-sign_time">Takes less than a few seconds</p>
        </div>
        <div className="smallScreenLinksTwo">
          <Link to="/sign-in" className="smallScreenLinksTwo-link">
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="smallScreenLinksTwo-link"
            id="smallScreenLinksTwo-link"
          >
            Sign up
          </Link>
        </div>
        <div className="smallScreen-social_div">
          <GitHub className="smallScreen-social_icon" />
          <Twitter className="smallScreen-social_icon" />
          <LinkedIn className="smallScreen-social_icon" />
          <Email className="smallScreen-social_icon" />
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNav;
