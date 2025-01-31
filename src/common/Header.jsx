
import { Link, useLocation } from "react-router-dom"

function Header() {

  let location = useLocation();

  return (
    <div>
      <nav>
        <ul>
            <li> <Link to="/" className={`nav-link ${location.pathname == "/" ? 'active' : ''}`}>Home</Link> </li>
            <li> <Link to="/about" className={`nav-link ${location.pathname == "/about" ? 'active' : ''}`}>About</Link> </li>
            <li> <Link to="/contact" className={`nav-link ${location.pathname == "/contact" ? 'active' : ''}`}>Contact</Link> </li>
            <li> <Link to="/blog" className={`nav-link ${location.pathname == "/blog" ? 'active' : ''}`}>Blogs</Link> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header