const DARK_THEME = {
    '--primary':'blue',
    'dark':'red',
    'light':'white'
  };
  
const LIGHT_THEME = {
    'primary':'#e5d9c5',
    'dark':'#b3a894',
    'light':'#fffff8'
  };

const switchElem = document.getElementById('theme-switch');

const setTheme = theme => {
    const root = document.documentElement;

    // for (const property in theme) {
    //     root.style.setProperty(property, theme[property]);
    //     // console.log(`${property}: ${object[property]}`);
    // }

    root.style.setProperty('--primary', theme['--primary']);
    root.style.setProperty('--dark', theme['dark']);
    root.style.setProperty('--light', theme['light']);
};

const switchTheme = e => {
    const isDarkTheme = e.target.checked;
    const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;

    setTheme(theme);
    localStorage.setItem('isDarkTheme', isDarkTheme);
};

const initTheme = () => {
    // const theme = localStorage.getItem('isDarkTheme'); // DARK, LIGHT
    // const isDarkTheme = theme === 'DARK_THEME';
    const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
    console.log(isDarkTheme, typeof isDarkTheme);
    switchElem.checked = isDarkTheme;

    const theme = isDarkTheme ? DARK_THEME : LIGHT_THEME;
    setTheme(theme);
}

initTheme();
switchElem.addEventListener('change', switchTheme);
