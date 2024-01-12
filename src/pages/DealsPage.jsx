import React from "react";
import CNavbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import Footer from "../components/Footer";

function DealsPage() {
  return (
    <>
      <div>
        <CNavbar />

        <Card className="ad-container animate__animated animate__fadeInDown bg-light p-4 rounded">
          <Card.Img
            variant="top"
            src="https://media.defense.gov/2023/Dec/15/2003360158/2000/2000/0/231214-F-BK017-1002.JPG"
          />
          <Card.Body>
            <Card.Title className="ad-title">
              Public holidays (January 15, 2024) Special Offer
            </Card.Title>
            <Card.Text className="ad-description">
              50% off in any product
            </Card.Text>
            <Card.Text className="ad-promocode">
              Use promo code:{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>JAN 25</span>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="ad-container animate__animated animate__fadeInDown bg-light p-4 rounded mt-4">
          <Card.Img
            variant="top"
            src="https://corporate.walmart.com/content/dam/corporate/images/newsroom/2023/10/18/walmart-celebrates-a-year-of-saving-customers-money-with-its-most-magical-holiday-season-yet/Customer-Shops-for-Christmas-Trees.jpg"
          />
          <Card.Body>
            <Card.Title className="ad-title">Free voucher</Card.Title>
            <Card.Text className="ad-description">
              Get free voucher on any orders in Jan 15
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="ad-container animate__animated animate__fadeInDown bg-light p-4 rounded mt-4">
          <Card.Img
            variant="top"
            src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=564%2Cq=70%2Csharpen=1%2Cwidth=952/wp-content/uploads/kombucha-second-fermented-fruit-tea-probiotic-foo-2022-07-19-06-34-38-utc.jpg"
          />
          <Card.Body>
            <Card.Title className="ad-title">Bumper offers</Card.Title>
            <Card.Text className="ad-description">
              Buy one get one free
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="ad-container animate__animated animate__fadeInDown bg-light p-4 rounded mt-4">
          <Card.Img
            variant="top"
            src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=564%2Cq=70%2Csharpen=1%2Cwidth=952/wp-content/uploads/strawberry-ice-cream-day-1.jpg"
          />
          <Card.Body>
            <Card.Title className="ad-title">Buy now And pay later</Card.Title>
            <Card.Text className="ad-description">
              Best solutions for finance
            </Card.Text>
          </Card.Body>
        </Card>
        <Footer />
      </div>
    </>
  );
}

export default DealsPage;
