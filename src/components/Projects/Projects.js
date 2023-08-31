import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/githubtracker.png";
import emotion from "../../Assets/Projects/starbucks.png";
import editor from "../../Assets/Projects/notes.png";
import chatify from "../../Assets/Projects/informmu.png";
import suicide from "../../Assets/Projects/portfolio.png";
import bitsOfCode from "../../Assets/Projects/commingsoon.png";

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
              title="University WebApp"
              description="It is an University management WebApp that I have created with reactjs and with use of react mui. In this I developed a Admin panel and dashboard which can assist a features of Signup login and organize the academic stuff."
              ghLink="https://github.com/collegeprojectmmdu/InforMMu_webapp"
              
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={editor}
            isBlog={false}
            title="Notes App"
            description="It's a Notes app that I have created with reeactjs. Note taking is one of those universal but intensely personal things. Everyone takes notes, whether it's as simple as writing down a grocery list or phone number or as systematic as typing up detailed book summaries or meeting minutes. "
            ghLink="https://github.com/vermasaurav/NotesApp"
                        
          />
        </Col>

        <Col md={4} className="project-card">
        <ProjectCard
          imgPath={emotion}
          isBlog={false}
          title="Product landing page"
          description="It is a landing page of starbucks from TATA company. I have uses HTML5,CSS3 and javascript and in future I will add something new to this website."
          ghLink="https://github.com/vermasaurav/Starbucks_landingPage"
          
        />
      </Col>

         
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Github Tracker"
              description="Uses the github API and build an interface that a track your github account repository list name lastly you created, number of following and follow. It is helpful for instant check your github account. "
              ghLink="https://github.com/vermasaurav/githubprofiletracker"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Porfolio"
              description="Here I created my own portfolio that describe my academic detail, skills that I have got from acedemic journey, Projects that I created and add the Resume. I uses Reacts js and some of its libraries in this project."
              ghLink="https://github.com/vermasaurav/portfolioWebapp"
              
            />
          </Col>

          
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={bitsOfCode}
            isBlog={false}
            title="Latest project"
            description="Work in Progress."
            ghLink=""
           
          />
        </Col>


      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
