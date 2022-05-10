import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="nav">
          <a href="Home" className="nav__link">Home</a>
          <a href="Shopping"className="nav__link">Shopping</a>
          <a href="About us"className="nav__link">About Us</a>
          <CartWidget/>
          <Nav.Link href="#action2">
                                    <Link to="/">INICIO</Link>
                                </Nav.Link>

                                <Nav.Link href="#action2">
                                    <Link to="/categori/Budines">Budines</Link>
                                </Nav.Link>

                                <Nav.Link href="#action2">
                                <Link to="/categori/Pasta frola">Pasta frola</Link>
                                </Nav.Link>

                                <Nav.Link href="#action2">
                                <Link to="/categori/Bizcochuelo">Bizcochuelo</Link>
                                </Nav.Link>

                                <Nav.Link href="#action2">
                                <Link to="/categori/Otras especialidades">Otras especialidades</Link>
                                    </Nav.Link>

        </nav>
  )
}

export default Nav