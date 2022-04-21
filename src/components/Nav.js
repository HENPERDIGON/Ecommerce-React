import CartWidget from "./CartWidget";
const Nav = () => {
  return (
    <nav className="nav">
          <a href="Home" className="nav__link">Home</a>
          <a href="Shopping"className="nav__link">Shopping</a>
          <a href="About us"className="nav__link">About Us</a>
          <CartWidget/>

        </nav>
  )
}

export default Nav