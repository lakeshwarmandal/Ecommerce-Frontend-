import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import CNavbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import { Carousel, Card } from "react-bootstrap";
import Footer from "../components/Footer";

function Home() {
  const [products, setProducts] = useState([]);
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error occurred while fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  const handleAddToCart = async (productId, quantity) => {
    if (authState && authState.username) {
      try {
        const userId = authState.userId;
        const url = `http://localhost:8080/carts/${userId}`;
        const response2 = await axios.post(url, {
          productId: productId,
          quantity: quantity,
        });
        console.log(
          `${userId} is adding product with ID ${productId} to cart with quantity ${quantity}`
        );
        console.log("Success");
        updateCartItemCount(cartItemCount + 1);
      } catch (error) {
        console.error("Error occurred while adding item to cart:", error);
      }
    } else {
      navigate("/login");
    }
  };

  const handleAddToWishlist = async (productId, productName, price, url) => {
    if (authState && authState.userId) {
      try {
        const userId = authState.userId;
        const urll = `http://localhost:8080/wishlist`;
        const response3 = await axios.post(urll, {
          userId: userId,
          productId: productId,
          productName: productName,
          price: price,
          url: url,
        });
        console.log(
          `${userId} is adding product with ID ${productId} to the wishlist`
        );
        console.log("Success");
      } catch (error) {
        console.error("Error occurred while adding item to wishlist:", error);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <CNavbar />
      <Navbar2 />
      <Carousel>{/* Carousel items */}</Carousel>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.url}
                  alt={product.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    {product.name}
                  </Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleAddToCart(product.id, 1)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-primary ml-2"
                      onClick={() =>
                        handleAddToWishlist(
                          product.id,
                          product.name,
                          product.price,
                          product.url
                        )
                      }
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
