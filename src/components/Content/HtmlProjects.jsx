import { Link } from "react-router-dom";
import image1 from "../../assets/banner.png";
import image2 from "../../assets/Jasper copy.jpg";
import image3 from "../../assets/bike-2.png";

const HtmlProjects = () => {
  return (
    <div className="md:flex gap-10 my-10">
      <div className="card w-96 glass shadow-xl">
        <figure>
          <img src={image1} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Justice</h2>
          <p>
            Justice is a legal solution website where they provide effective
            legal solutions.Website has a contact section and Contact section.
          </p>
          <div className="card-actions justify-between">
            <Link
              to="https://github.com/dasojib/legal-solution-bootstrap-responsive"
              className="badge badge-outline"
            >
              GitHub
            </Link>
            <Link
              to="https://jolly-syrniki-e8ee6e.netlify.app"
              className="badge badge-outline"
            >
              Live
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 glass shadow-xl">
        <figure>
          <img src={image2} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">AI Universe Hub</h2>
          <p>
            This is a artificial intelligence learning related website. Here
            people can learn different types of technologies. Here we can see
            the details and the learning cost of the technology.
          </p>
          <div className="card-actions justify-between">
            <Link
              to="https://github.com/dasojib/Ai-universe-hub"
              className="badge badge-outline"
            >
              GitHub
            </Link>
            <Link
              to="https://beamish-cobbler-c085da.netlify.app/"
              className="badge badge-outline"
            >
              Live
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 glass shadow-xl">
        <figure>
          <img src={image3} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Bikerz Zone</h2>
          <p>
            This is a bike related website where different types of bikes are displayed. The customer can buy their chosen bike by clicking Purchase button.This is a responsive website.
          </p>
          <div className="card-actions justify-between">
            <Link
              to="https://github.com/dasojib/bikerz-zone"
              className="badge badge-outline"
            >
              GitHub
            </Link>
            <Link
              to="https://dasojib.github.io/bikerz-zone/"
              className="badge badge-outline"
            >
              Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlProjects;
