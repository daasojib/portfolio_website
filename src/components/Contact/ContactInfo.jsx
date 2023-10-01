import Container from "../Shared/Container";
import { SiNamecheap } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import EmailContact from "./EmailContact";

const ContactInfo = () => {
  return (
    <Container>
      <div>
        <h2 className="text-5xl text-center font-Pacifico">Get In Touch</h2>
        <h3 className="text-xl text-center my-5">
          Do you want to talk about your project?
        </h3>
        <div className="md:flex justify-between p-16">
          <div className="my-auto">
            <p className="flex items-center gap-2">
              <SiNamecheap />
              <span className="text-violet-600 font-bold">Name:</span> Sojib Das
            </p>
            <p className="flex items-center gap-2 my-2">
              <MdEmail />
              <span className="text-violet-600 font-bold">Email:</span>
              dasojib49@gmail.com
            </p>
            <p className="flex items-center gap-2 my-2">
              <AiOutlinePhone />
              <span className="text-violet-600 font-bold">Phone:</span>{" "}
              01953367043
            </p>
            <p className="flex items-center gap-2">
              <FaLocationArrow />
              <span className="text-violet-600 font-bold">Location:</span>{" "}
              Narail, Bangladesh
            </p>
            <div className="flex flex-row gap-10 my-5 ms-5">
              <Link to='https://web.facebook.com/daasojib/'>
                <FaFacebook></FaFacebook>
              </Link>
              <Link to='https://twitter.com/DasSojib49'>
                <FaTwitter></FaTwitter>
              </Link>
              <Link to='https://www.linkedin.com/in/sojib-das-45885a280/'>
                <FaLinkedin></FaLinkedin>
              </Link>
              <Link to='https://t.me/dasojib'>
                <FaTelegram></FaTelegram>
              </Link>
              <Link to='http://wa.me/+8801953367043'>
                <FaWhatsapp></FaWhatsapp>
              </Link>
            </div>
          </div>
          <div className="md:divider md:bg-gray-500 md:divider-horizontal">
          </div>
          <div>
            <EmailContact></EmailContact>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactInfo;
