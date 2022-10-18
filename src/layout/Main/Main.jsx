import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import LeftSideNav from "../../pages/Shared/LeftSideNav/LeftSideNav";
import NavigationBar from "../../pages/Shared/NavigationBar/NavigationBar";
import RightSideNav from "../../pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <Container>
        <Row>
          <Col lg="3" className="d-none d-lg-block">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="5">
            <Outlet></Outlet>
          </Col>
          <Col lg="4">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
