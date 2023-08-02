import './static/css/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Main from './activities/Main'
import Messenger from './activities/Messenger'
import People from './activities/People'
import changeTheme from "./functions/ChangeTheme";

const App = () => {
    const saveUserTheme = localStorage.getItem('user-theme')
    const htmlBlock = document.documentElement
    const navigation = Navigation(saveUserTheme)

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if(!saveUserTheme) {
            changeTheme(htmlBlock)
        }
    })

    setThemeClass()

    function setThemeClass() {
        let userTheme;
        if (window.matchMedia) {
            userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
        if (saveUserTheme) {
            htmlBlock.classList.add(saveUserTheme)
        } else {
            htmlBlock.classList.add(userTheme)
        }
    }

    return (
        <Router>
            {navigation}
            <Routes>
                <Route exact path='/' element={<Main/>}/>
                <Route path='/messenger' element={<Messenger/>}/>
                <Route path='/people' element={<People/>}/>
            </Routes>
        </Router>
    )
}

export default App;
