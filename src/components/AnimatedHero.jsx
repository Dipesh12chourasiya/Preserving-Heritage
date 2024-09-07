import { Row, Col, Container } from "react-bootstrap";
import "./AnimatedHero.css";
import AppFooter from "./footer";

function AnimatedHeor() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6} className="LeftCont">
            <div>
              <img className="Imgtag" src={require("../assets/newHeroImg/cul.jpg")} alt="some" />
            </div>
            <div>
              <h3 className="mainH">INDIAN CULTURE</h3>
            </div>
            <div>
              <img className="Imgtag" src={require("../assets/newHeroImg/top5.jpeg")} alt="some" />
            </div>
          </Col>
          <Col sm={6} className="RightCont">
              <img src={require("../assets/newHeroImg/indiaMap.png")} alt="some" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AnimatedHeor;
