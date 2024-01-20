import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gurujiai from "../../Assets/Projects/GuruJI Ai.jpg"
import vishalkart from "../../Assets/Projects/vishalkart.jpg"
import textutils from "../../Assets/Projects/TextUtils.jpg"
import insightSync from "../../Assets/Projects/insightSync.jpg"
import AtoZ from "../../Assets/Projects/ATOZ.jpg"
import mymeal from "../../Assets/Projects/MyMeal.jpg"


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
              imgPath={gurujiai}
              isBlog={false}
              title="Guru JI AI"
              description="Developed a responsive web application using React.js and Bootstrap called Guru
              Ji. Integrated Google Gemni-Pro AI API to enable users to ask questions and upload
              photos for AI-driven analysis. The platform facilitates seamless interaction and provides insightful answers based on user queries and image content"
              ghLink="https://github.com/vish941526/GURUJI-AI"
              demoLink="https://gurujiallrounder.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vishalkart}
              isBlog={false}
              title="VishalKart"
              description="VishalKart, a robust ecommerce platform, using the MERN stack. Seamlessly combining front-end and back-end technologies for a responsive and efficient shopping
              experience. VishalKart reflects my expertise in MERN stack , showcasing my ability."
              ghLink="https://github.com/vish941526/TestEcommerceWeb-app"
              demoLink="https://vishalkart.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="TextUtils"
              description="TextUtils Web App is a user-friendly web application built using React.js that empowers users to perform various text transformations effortlessly. With TextUtils,
              you can convert text to uppercase, lowercase, or even print it to a PDF file with just
              a few clicks."
              ghLink="https://github.com/vish941526/Textutils-app"
              demoLink="https://vishtextutils.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insightSync}
              isBlog={false}
              title="InsightSync News"
              description="Developed InsightSync, a dynamic web platform using React.js. Integrated News API for real-time news updates, showcasing proficiency in React.js and external API integration. A testament to my commitment to innovative web development"
              ghLink="https://github.com/vish941526/InsightSync-news-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AtoZ}
              isBlog={false}
              title="Kids Learn"
              description=" kids learn a personal and simple website for little ones under 4! With bright colors   can have fun while learning their ABCs. Join us in making early education a joyful adventure"
              ghLink="https://github.com/vish941526/A-to-Z-for-kids"
              demoLink="https://srishtisona.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mymeal}
              isBlog={false}
              title="MyOnlineMeal"
              description="Check out MyOnlineMeal.com, a cool food website made with simple HTML and CSS. It's perfect for beginners, and you can easily explore tasty dishes. Click around and enjoy the delicious journey."
              ghLink="https://github.com/vish941526/MyMeal.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
