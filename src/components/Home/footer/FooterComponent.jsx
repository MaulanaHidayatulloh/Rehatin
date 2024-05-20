import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-page">
      <Navbar className="sec-footer">
        <Container>
          <Row className="gap-3">
            <Col sm={5}>
              <h5>Rehatin</h5>
              <p className="text-align-justify">
                "Temukan kebahagiaan di setiap sudut kota! Nikmati rekomendasi
                tempat hiburan terbaik untuk pengalaman tak terlupakan. "
              </p>
            </Col>
            <Col sm={2}>
              <h5>Information</h5>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Gallery</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </Col>
            <Col sm={3}>
              <h5>Address</h5>
              <p className="text-align-justify">
                JL TB Simatupang Kav 1-S, Cilandak Timur, Kota Jakarta Selatan
              </p>
            </Col>
            <Col sm={1}>
              <div className="mail">
                <Link>
                  <Icon.Envelope />
                </Link>
              </div>
              <div className="twitter">
                <Link>
                  <Icon.Twitter />
                </Link>
              </div>
              <div className="no">
                <Link>
                  <Icon.Whatsapp />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Navbar className="copyright">
        <Container>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text className="copyright-text text-white">
              Copyright &#169; 2024. All rights reserved.
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
