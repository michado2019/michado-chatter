import Navbar from '../../navbar/Navbar'
import './About.css'
import { navbarLinks } from '../../navbar/navbarData/NavbarData'
const About = () => {
  return (
    <div>
        <Navbar navbarLinks={navbarLinks}/>
    </div>
  )
}

export default About