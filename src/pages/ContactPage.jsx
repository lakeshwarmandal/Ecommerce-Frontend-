import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import CNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <CNavbar />
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Contact Details</Card.Title>
                <Card.Text>
                  <strong>Company Name:</strong> Walmart Online Store
                </Card.Text>
                <Card.Text>
                  <strong>Establish On:</strong> JAN-04-2024
                </Card.Text>
                <Card.Text>
                  <strong>Number of Branches:</strong> 3300 Store
                </Card.Text>
                <Card.Text>
                  <strong>Ratings:</strong> 5 starts out of 5
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-dark text-white">
                <Row className="justify-content-center align-items-center">
                  <Col xs={6} className="text-center">
                    <Card.Img
                      src="https://media.licdn.com/dms/image/D4E03AQFWlbpV3tbhiQ/profile-displayphoto-shrink_400_400/0/1704477762819?e=1710374400&v=beta&t=OxKvqaO_kIglF99eWlb1CW_NEp16K4U3R7v3Sy4RQo8"
                      alt="CEO Photo"
                      className="img-fluid rounded-circle"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <div className="mt-2">
                      <strong>CEO:</strong> Jyoti Baskota
                    </div>
                  </Col>
                  <Col xs={6} className="text-center">
                    <Card.Img
                      src="https://media.licdn.com/dms/image/D5603AQEvqTPHzasEIQ/profile-displayphoto-shrink_400_400/0/1701553127825?e=1710374400&v=beta&t=BNc9v92QGPFWW64DLKgMNWjEh47xd_E2BD9zCOZwo4A"
                      alt="Proprietor Photo"
                      className="img-fluid rounded-circle"
                      style={{
                        width: "150px",
                        height: "150px",
                        marginTop: "20px",
                      }}
                    />
                    <div>
                      <strong>Proprietor:</strong> Raunak Joshi
                    </div>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ContactPage;
