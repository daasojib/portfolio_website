import { Link } from 'react-router-dom';
import image1 from '../../assets/Capture.PNG1.png'
import image2 from '../../assets/Capture.png'
import image3 from '../../assets/Sports.jpg'

const ReactProjects = () => {
  return (
    <div className='md:flex gap-10 my-10'>
      <div className="card w-96 glass shadow-xl">
        <figure>
          <img
            src={image1}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            The Chef Master
          </h2>
          <p>This is a Thailand based food recipe website.Best chefs of Thailand are here.Website shows the number of recipe and details of the chef.</p>
          <div className="card-actions justify-between">
            <Link to='https://github.com/dasojib/the-chef-master-client' className="badge badge-outline">Client</Link>
            <Link to='https://the-chef-master.web.app/' className="badge badge-outline">Live</Link>
            <Link to='https://github.com/dasojib/the-chef-master-server' className="badge badge-outline">Server</Link>
          </div>
        </div>
      </div>
      <div className="card w-96 glass shadow-xl">
        <figure>
          <img
            src={image2}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Cars World
          </h2>
          <p>This is a toy car related website where different types of toy car are displayed in category wise.A toy car photo gallery.I also use google authentication in the website.</p>
          <div className="card-actions justify-between">
            <Link to='https://github.com/dasojib/cars-world-client' className="badge badge-outline">Client</Link>
            <Link to='https://cars-world-b1b49.web.app/' className="badge badge-outline">Live</Link>
            <Link to='https://github.com/dasojib/cars-world-server' className="badge badge-outline">Server</Link>
          </div>
        </div>
      </div>
      <div className="card w-96 glass shadow-xl">
        <figure>
          <img
            src={image3}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Sports Club
          </h2>
          <p>This is a toy car related website where different types of toy car are displayed in category wise.A toy car photo gallery.I also use google authentication in the website.</p>
          <div className="card-actions justify-between">
            <Link to='https://github.com/dasojib/sports-club-client' className="badge badge-outline">Client</Link>
            <Link to='https://sports-club-2afe1.web.app/' className="badge badge-outline">Live</Link>
            <Link to='https://github.com/dasojib/sports-club-server' className="badge badge-outline">Server</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactProjects;
