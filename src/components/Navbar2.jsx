import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar2.css"; // Import custom CSS file

function Navbar2() {
  return (
    <div>
      <Navbar bg="info" variant="dark">
        <Navbar.Collapse className="justify-content-center">
          <Nav className="w-100">
            <Nav.Link as={Link} to="/food" className="text-white text-center">
              Food
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/clothing"
              className="text-white text-center"
            >
              Clothings
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/electronic"
              className="text-white text-center"
            >
              Electronics
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cosmetic"
              className="text-white text-center"
            >
              Cosmetics
            </Nav.Link>
            <Nav.Link as={Link} to="/house" className="text-white text-center">
              Kitchen
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;
