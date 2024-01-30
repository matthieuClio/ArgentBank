// React router
import { Outlet, Link } from 'react-router-dom';

// Style
import './header.scss';

export default function Header () {
    return (
        <>
            <header>
                <nav className="main-navigation">
                    <ul className="main-navigation__ul">
                        <li>
                            <Link to="/">
                                <img src="./images/argentBankLogo.png" alt="logo ARGENTBANK" className="main-navigation__ul__logo"/>
                            </Link>
                        </li>

                        <li className="main-navigation__ul__sign-in">
                            <Link to="login">
                                <span className="fa fa-user-circle main-navigation__ul__sign-in__icon"></span>
                                <span>Sign In</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </>
    );
}