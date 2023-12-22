import { Helmet } from "react-helmet";
import Container from "./Shared/Container";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="my-32">
      <Container>
        <Helmet>
          <title>Sojib - About</title>
        </Helmet>
        <Slide>
          <h2 className="text-center font-Pacifico text-5xl">About Me</h2>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p className="text-xl my-5">
            Hello, My Name is Sojib Das. I am a junior web developer .I can develop seamless and efficient web applications for an enhanced user experience.Creative thinking is my hidden talent.I have done different types of full stack projects based on my skills. I have a enough working knowledge in HTML, CSS,Bootstrap, JavaScript, Tailwind, Node.js , Express.js, MongoDB. I have done authentication in my full stack websites. I also implemented payment system in those websites.
          </p>
        </Fade>
      </Container>
    </div>
  );
};

export default About;
