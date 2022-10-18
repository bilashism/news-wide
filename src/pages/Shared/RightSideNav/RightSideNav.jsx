import React from "react";
import { Button, ButtonGroup, Carousel, ListGroup } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import brands1 from "../../../assets/brands/brands-1.webp";
import brands2 from "../../../assets/brands/brands-2.webp";
import brands3 from "../../../assets/brands/brands-3.webp";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical className="w-100 gap-2">
        <Button variant="outline-dark">
          <FcGoogle /> log in with google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> log in with github
        </Button>
      </ButtonGroup>

      <div className="pt-5">
        <h2>Find us on</h2>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="pt-5">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={brands2} alt="First slide" />
            <Carousel.Caption className="bg-dark bg-opacity-50">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={brands1} alt="Second slide" />

            <Carousel.Caption className="bg-dark bg-opacity-50">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={brands3} alt="Third slide" />

            <Carousel.Caption className="bg-dark bg-opacity-50">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;
