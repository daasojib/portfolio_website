import { Link } from "react-router-dom";
import profile from "../../assets/Profile.jpeg";
import Container from "../Shared/Container";
import { TypeAnimation } from "react-type-animation";


const Intro = () => {
  return (
    <Container>
      <div className="md:flex my-10">
        <div className="my-auto">
          <h1 className="text-3xl font-Pacifico">Introduction</h1>
          <TypeAnimation
            sequence={[
              "Junior  FRONTEND DEVELOPER",
              1000,
              "Junior  REACT DEVELOPER",
              1000,
              "Junior  MERN DEVELOPER",
              1000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="my-5">
            Hey🖐, I am Sojib . A passionate MERN Stack Developer.
          </p>
          <Link to="/intro" className="me-5">
            <button className="btn btn-outline btn-info">Hire Me</button>
          </Link>
          <Link to='https://drive.google.com/file/d/12cTMg1WyBpWUVYerxTp9K_W1njNirJ1_/view?usp=sharing' target="_blank" rel="noopener noreferrer">
            <button className="btn my-2 btn-outline btn-accent">
              View Resume
            </button>
          </Link>
        </div>
        <div className="m-auto">
          <div className="avatar">
            <div className="w-80 rounded-xl ring">
              <img src={profile} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
