import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1,1 (1).png";
import projImg2 from "../assets/img/project1,1 (2).png";
import projImg3 from "../assets/img/project1,1 (3).png";
import projImg4 from "../assets/img/project1,1 (4).png";
import projImg5 from "../assets/img/project1,1 (5).png";
import projImg6 from "../assets/img/project1,1 (6).png";
import projImg7 from "../assets/img/project1,1 (7).png";
import projImg8 from "../assets/img/project1,1 (8).png";
import mob1 from "../assets/img/mobile1,1.png";
import mob2 from "../assets/img/mobile1,2.png";
import mob3 from "../assets/img/mobile1,3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Make Up page1",
      description: "Angular",
      imgUrl: projImg1,
    },
    {
      title: "Make Up page2",
      description: "Angular",
      imgUrl: projImg2,
    },
    {
      title: "Make Up page3",
      description: "Angular",
      imgUrl: projImg7,
    },
    {
      title: "Make Up page4",
      description: "Angular",
      imgUrl: projImg8,
    },
    {
      title: "Portfolio Page1",
      description: "ReactJS",
      imgUrl: projImg3,
    },
    {
      title: "Portfolio Page2",
      description: "ReactJS",
      imgUrl: projImg4,
    },
    {
      title: "Portfolio Page3",
      description: "ReactJS",
      imgUrl: projImg5,
    },
    {
      title: "Portfolio Page4",
      description: "ReactJS",
      imgUrl: projImg6,
    },
  ];
  const projects2 = [
    {
      title: "Doctor app page1",
      description: "Flutter",
      imgUrl: mob1,
    },
    {
      title: "Doctor app page2",
      description: "Flutter",
      imgUrl: mob2,
    },
    {
      title: "Portfolio Page1",
      description: "Flutter",
      imgUrl: mob3,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This is an exmples of my latest Projects that i would share with you </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile Application</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>hello</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}alt = ""></img>
    </section>
  )
}
