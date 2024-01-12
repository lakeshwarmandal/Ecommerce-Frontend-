import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navStyle.css";
import AddItemForm from "./AddItemForm";
import ProductTable from "./ProductTable";
import CreateUserForm from "./CreateUserForm";
import SalesReport from "./SalesReport";
import Footer from "./Footer";

const AdminNavbar = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const navigate = useNavigate();

  const handleLinkClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="admin-navbar-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Admin Portal
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeComponent === "AddItemForm" ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => handleLinkClick("AddItemForm")}
                  >
                    Add New Product
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeComponent === "ProductTable" ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => handleLinkClick("ProductTable")}
                  >
                    Edit Product
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeComponent === "CreateUserForm" ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => handleLinkClick("CreateUserForm")}
                  >
                    Add User
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeComponent === "SalesReport" ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => handleLinkClick("SalesReport")}
                  >
                    Sales
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="admin-main-content">
        {activeComponent === "AddItemForm" && (
          <div className="add-item-form">
            <AddItemForm show={true} handleClose={handleLinkClick} />
          </div>
        )}
        {activeComponent === "ProductTable" && (
          <div className="product-table">
            <ProductTable />
          </div>
        )}
        {activeComponent === "CreateUserForm" && (
          <div className="create-user-form">
            <CreateUserForm />
          </div>
        )}
        {activeComponent === "SalesReport" && (
          <div className="sales-report">
            <SalesReport />
          </div>
        )}
        {activeComponent === "CalendarPage" && (
          <div className="calendar-page">
            <CalendarPage />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminNavbar;
