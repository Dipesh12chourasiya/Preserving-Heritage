// import Carousel from "react-bootstrap/Carousel";

// import { Row, Col, Container } from "react-bootstrap";
import "./hero.css";
import AppServices from "./services";
import FlashCard from "./FlashCard/FlashCard";
import Game from "./Game";
import AppFooter from "./footer";
import AnimatedHeor from "./AnimatedHero";

// var heroData = [
//   {
//     id: 1,
//     image: require("../assets/heritage-culture/banner.jpeg"),
//   },
//   // {
//   //   id: 2,
//   //   image: require("../assets/heritage-culture/h2.jpg"),
//   // },
//   // {
//   //   id: 3,
//   //   image: require("../assets/heritage-culture/h3.jpg"),
//   // },
// ];

function AppHero() {
  return (
    <div>

      <AnimatedHeor />
      <FlashCard />
      <AppServices /> {/* services == art, dance, */}
      {/* <Table /> */}
      <Game />

      <footer id='footer'>
            <AppFooter />
      </footer>
    </div>
  );
}

export default AppHero;
