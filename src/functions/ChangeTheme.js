
const changeTheme = (htmlBlock, saveTheme = false) => {
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

export default changeTheme