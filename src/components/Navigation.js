import '../static/css/Navigation.css'
import main from '../static/img/main.svg'
import messenger from '../static/img/messenger.svg'
import people from '../static/img/people.svg'
import {HandySvg} from 'handy-svg'
import changeTheme from '../functions/ChangeTheme'

const Navigation = (saveUserTheme) => {
    const htmlBlock = document.documentElement

    const themeFunction = () => changeTheme(htmlBlock, true)

    return (
    <header className="header">
        <nav className="header__navigation">
            <a href="/" className="header__link">
                <HandySvg src={main} className="icon"/>
            </a>
            <a href="/messenger" className="header__link">
                <HandySvg src={messenger} className="icon"/>
            </a>
            <a href="/people" className="header__link">
                <HandySvg src={people} className="icon"/>
            </a>
        </nav>
        <div className="theme">
            <div className="theme__button" onClick={themeFunction}>

            </div>
        </div>
    </header>
    )
}

export default Navigation