import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black via-blue-950 to-purple-950 text-white">
      <Helmet>
        <title>Sojib - Portfolio</title>
      </Helmet>
      <Header></Header>
      <div className="pt-28 pb-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
