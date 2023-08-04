import '../static/css/Navigation.css'
import main from '../static/img/main.svg'
import messenger from '../static/img/messenger.svg'
import people from '../static/img/people.svg'
import {HandySvg} from 'handy-svg'
import changeTheme from '../functions/ChangeTheme'
import {Link} from "react-router-dom";

const Navigation = (saveUserTheme) => {
    const htmlBlock = document.documentElement

    const themeFunction = () => changeTheme(htmlBlock, true)

    return (
    <header className="header">
        <nav className="header__navigation">
            <Link to="/" className="header__link">
                <HandySvg src={main} className="icon"/>
            </Link>
            <Link to="/messenger" className="header__link">
                <HandySvg src={messenger} className="icon"/>
            </Link>
            <Link to="/people" className="header__link">
                <HandySvg src={people} className="icon"/>
            </Link>
        </nav>
        <div className="theme">
            <div className="theme__button" onClick={themeFunction}>

            </div>
        </div>
    </header>
    )
}

export default Navigation