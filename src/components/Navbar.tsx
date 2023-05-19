import { Container, Button, Nav, Navbar as NavbarBs} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {
  const { openCart, cartQty } = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
          <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        </Nav>
        {cartQty > 0 && (<Button 
          onClick={openCart}
          style={{width: "3rem", height: "3rem", position: "relative"}} 
          variant="outline-primary" 
          className="rounded-circle"
        >
          <FontAwesomeIcon icon={faCartShopping} className="fa-lg"/>
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)"}}>{cartQty}</div>
        </Button>)}
      </Container>
    </NavbarBs>
  )
}