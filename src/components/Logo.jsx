import { Link } from 'react-router-dom';
import logoImg from '../assets/MainLogo.png'
const Logo = () => {
    return (
        <div>
            <Link to='/'><img width='100' height='100' src={logoImg} alt="logo" /></Link>
        </div>
    );
};

export default Logo;