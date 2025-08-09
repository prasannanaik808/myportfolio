import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Online Food delivery System"
              description="a digital platform that connects customers with restaurants, allowing users to browse menus, place orders, and manage payments for food delivery or pickupPersonal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/prasannanaik808/Online-Food-Delivery-System/tree/master"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Fully-Fledged-Banking-system"
              description="This application provides JWT-based authentication and authorization, along with core banking functionalities such as account management, transactions, payments, and transaction history. Enhanced database interaction using Hibernate annotations based mapping with MySQL.It focuses on implementing robust database management techniques."
              ghLink="https://github.com/prasannanaik808/Fully-Fledged-Banking-System.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hand gesture recognition"
              description="A hand gesture recognition project aims to enable machines to understand and respond to human hand movements, effectively creating a new form of human-computer interaction. This project typically involves using computer vision techniques to detect hand poses , extract relevant features, and classify them into meaningful gestures, allowing for intuitive control of devices or applications. "
              ghLink="https://github.com/prasannanaik808/Hand-Gesture-recognization.git"
                            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
