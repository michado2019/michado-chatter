import Navbar from "../../navbar/Navbar"
import { navbarLinks } from "../../navbar/navbarData/NavbarData"
const Contact = () => {
  return (
    <div className='contactWrapper'>
      <Navbar navbarLinks={navbarLinks} />
      <p>Contact us page</p>
    </div>
  )
}

export default Contact