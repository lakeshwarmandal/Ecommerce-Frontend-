import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import Navbar2 from "./components/Navbar2";
import FoodPage from "./pages/FoodPage";
import Cosmetic from "./pages/CosmeticPage";
import Clothing from "./pages/ClothingPage";
import House from "./pages/HousePage";
import Electronic from "./pages/ElectronicPage";
import WishlistPage from "./pages/WishlistPage";
import DealsPage from "./pages/DealsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cosmetic" element={<Cosmetic />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/house" element={<House />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
