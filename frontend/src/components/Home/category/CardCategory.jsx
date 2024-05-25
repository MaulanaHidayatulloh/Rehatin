import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardCategory.css";
import React from "react";

function CardCategory() {
  return (
    <div className="kategori">
      <h2 className="fw-bold">Choose your Favorite Cathegories!</h2>
      <Container className="sec-card">
        <Row xs={1} sm={2} md={2} lg={4} className="g-4"> 
          <Col className="card-kategori">
            <Card className="park text-white p-0">
              <Card.Img
                className="img img-kategori img-park"
                src="src\assets\Home\Category\Gambar katagori\0-park.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay className="fw-bold text-wrap">
                <Card.Text className="card-text ">Park</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="card-kategori">
            <Card className="card museum text-white p-0">
              <Card.Img
                className="img img-kategori img-museum"
                src="src\assets\Home\Category\Gambar katagori\0-museum.webp"
                alt="Card image"
              />
              <Card.ImgOverlay className="fw-bold text-wrap">
                <Card.Text className="card-text ">Museum</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="card-kategori">
            <Card className="card eatry text-white p-0">
              <Card.Img
                className="img img-kategori img-eatry"
                src="src\assets\Home\Category\Gambar katagori\0-eatery.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay className="fw-bold text-wrap">
                <Card.Text className="card-text ">Eatery</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="card-kategori">
            <Card className="card playground text-white p-0">
              <Card.Img
                className="img img-kategori img-playground"
                src="src/assets/Home/Category/Gambar katagori/0-wahana.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay className="fw-bold text-wrap">
                <div className="layer"></div>
                <Card.Text className="card-text">Playground</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardCategory;
