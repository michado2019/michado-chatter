import './Home.css'
import Navbar from '../../navbar/Navbar'
import { navbarLinks } from '../../navbar/navbarData/NavbarData'
const Home = () => {

  
  return (
    <div>
        <Navbar navbarLinks={navbarLinks}  />
    </div>
  )
}

export default Home