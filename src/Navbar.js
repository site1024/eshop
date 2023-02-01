import {NavLink} from "react-router-dom";

const Navbar = () => {
    const getClassName = ({isActive}) =>{
        if (isActive){
            return "active";
        }
    }
    return(
        <nav className="navbar">
            <NavLink to="/" className="nav-brand">
            Beter Dag
            </NavLink>
        <ul>
          <li className="nav-item">
            <NavLink to="/" className={getClassName}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
              Cart (0)
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;