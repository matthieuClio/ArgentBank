// React router
import { Outlet, Link } from 'react-router-dom';

// React redux
import { useSelector } from 'react-redux';

// Style
import './header.scss';

export default function Header () {
    const userInfo = useSelector((state: {
        user: { userFirstname: string, connected: boolean } 
    }) => state.user);

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
                            {/* Display when the user is connected */}
                            {userInfo.connected && 
                                (<>
                                    <Link to="user">
                                        <div className="main-navigation__ul__sign-in__container">
                                            <span className="fa fa-user-circle main-navigation__ul__sign-in__container__icon"></span>
                                            <span>{userInfo.userFirstname}</span>
                                        </div>
                                    </Link>

                                    <Link to="/">
                                        <div className="main-navigation__ul__sign-in__container">
                                            <span className="fa fa-sign-out main-navigation__ul__sign-in__container__icon"></span>
                                            <span>Sign Out</span>
                                        </div>
                                    </Link>
                                </>)
                            }

                            {/* Display when the user is not connected */}
                            {!userInfo.connected &&
                                (<Link to="login">
                                    <div className="main-navigation__ul__sign-in__container">
                                        <span className="fa fa-user-circle main-navigation__ul__sign-in__container__icon"></span>
                                        <span>Sign In</span>
                                    </div>
                                </Link>)
                            }
                        </li>
                    </ul>
                </nav>
            </header>
            
            {/* Display children of the main route */}
            <Outlet />
        </>
    );
}