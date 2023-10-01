import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10  rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">
            About me
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/projects" className="link link-hover">
            Projects
          </Link>
          <Link to="/resume" className="link link-hover">
            Resume
          </Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://web.facebook.com/daasojib/">
              <FaFacebook className="h-7 w-7"></FaFacebook>
            </Link>
            <Link to="https://twitter.com/DasSojib49">
              <FaTwitter className="h-7 w-7"></FaTwitter>
            </Link>
            <Link to="https://github.com/dasojib">
              <FaGithub className="h-7 w-7"></FaGithub>
            </Link>
            <Link to="https://www.linkedin.com/in/sojib-das-45885a280/">
              <FaLinkedin className="h-7 w-7"></FaLinkedin>
            </Link>
          </div>
        </div>
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="font-bold text-red-600 font-Pacifico"> SOJIB</span>
          </p>
        </div>
      </footer>
      <Wave
        fill="#666999"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
    </div>
  );
};

export default Footer;
