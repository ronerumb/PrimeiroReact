import './style.css';
import logo from '../../assets/logo.svg';

export const Header = () => {
    return (
     
        <header>
            <div className="Container">
                <div className="Logo">
                <img src={logo} alt="" />
                </div>
                <div className="Login">
                   <p>Login</p>
                </div>
            </div>
        </header>
    
    );

}