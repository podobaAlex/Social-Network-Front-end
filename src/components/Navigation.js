import '../static/css/Navigation.css'
import main from '../static/img/main.svg'
import messenger from '../static/img/messenger.svg'
import people from '../static/img/people.svg'
import {useEffect} from "react";
import {HandySvg} from 'handy-svg'

function chooseTheme() {
    const htmlBlock = document.documentElement
    const saveUserTheme = localStorage.getItem('user-theme')

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if(!saveUserTheme) {
            changeTheme(htmlBlock)
        }
    })

    const themeButton = document.querySelector('.theme__button')

    if (themeButton) {
        themeButton.onclick = () => {
            changeTheme(htmlBlock, true)
        };
    }
}

function changeTheme(htmlBlock, saveTheme = false) {
    let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark'
    let newTheme;

    if (currentTheme === 'light') {
        newTheme = 'dark'
    } else if (currentTheme === 'dark') {
        newTheme = 'light'
    }

    console.log(newTheme)

    htmlBlock.classList.remove(currentTheme)
    htmlBlock.classList.add(newTheme)
    if (saveTheme) {
        localStorage.setItem('user-theme', newTheme)
    }
}

const Navigation = () => {
    useEffect(chooseTheme)
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
            <div className="theme__button">

            </div>
        </div>
    </header>
    )
}

export default Navigation