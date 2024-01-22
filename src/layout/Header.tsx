// React router
import { Outlet } from 'react-router-dom';

// Style
import './header.scss';

export default function Header () {
    return (
        <>
            <header>
                <nav className="main-navigation">
                    <ul className="main-navigation__ul">
                        <li>
                            <img src="./images/argentBankLogo.png" alt="logo ARGENTBANK" className="main-navigation__ul__logo"/>
                        </li>

                        <li className="main-navigation__ul__sign-in">
                            <a href="#">
                                <span className="fa fa-user-circle main-navigation__ul__sign-in__icon"></span>
                                <span>Sign In</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </>
    )
}