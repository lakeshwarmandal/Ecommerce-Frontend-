import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import axios from "axios";
import { CartContext } from "../CartContext";
import "../pages/style1.css";

const CNavbar = () => {
  const { cart, updateCartItemCount } = useContext(CartContext);
  const { authState, setAuthState } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthState({ token: "", username: "" });
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  useEffect(() => {
    const fetchCartItemCount = async () => {
      try {
        const url = `http://localhost:8080/carts/${authState.userId}`;
        const response = await axios.get(url);
        const totalItems = response.data.totalItems;
        updateCartItemCount(totalItems);
      } catch (error) {
        console.error("Error occurred while fetching cart items:", error);
      }
    };

    if (authState.userId) {
      fetchCartItemCount();
    }
  }, [authState.userId, updateCartItemCount]);

  return (
    <>
      <Navbar
        bg="primary"
        expand="lg"
        variant="dark"
        className="justify-content-between text-light"
      >
        <Navbar.Brand as={Link} to="/" className="text-white">
          <img
            className="img"
            src={
              "https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
            }
          />
          <span className="ml-2"></span>
        </Navbar.Brand>
        <Nav.Link as={Link} to="/" className="text-white">
          Menu list
        </Nav.Link>
        <Nav.Link as={Link} to="/deals" className="text-white">
          Offers
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className="text-white">
          Contact
        </Nav.Link>
        <Nav>
          {authState && authState.username ? (
            <NavDropdown
              title={"Hello," + authState.username}
              id="navbar-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/orders">
                Account Lakeshwar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wishlist">
                Wishlist
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/orders">
                Orders
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link as={Link} to="/login" className="text-white ml-3">
              Login
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/cart" className="text-white">
            <div className="d-flex align-items-center">
              <FaShoppingCart size={30} color="white" />{" "}
              {cart && cart.totalItems > 0 && (
                <span className="ml-1 text-danger" style={{ fontSize: "24px" }}>
                  {cart.totalItems}
                </span>
              )}
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default CNavbar;
