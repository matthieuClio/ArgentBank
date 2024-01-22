// Style
import './header.scss'

export default function Header () {
    return (
        <header>
            <nav className="main-navigation">
                <ul className="main-navigation__ul">
                    <li>
                        <img src="./images/argentBankLogo.png" alt="logo ARGENTBANK" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}