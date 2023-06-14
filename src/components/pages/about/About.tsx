import Navbar from "../../navbar/Navbar";
import "./About.css";
import { navbarLinks } from "../../navbar/navbarData/NavbarData";
const About = () => {
  return (
    <div className="aboutWrapper">
      <Navbar navbarLinks={navbarLinks} />
      <p>About us page</p>
    </div>
  );
};
export default About;
