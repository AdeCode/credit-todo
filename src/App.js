import './App.scss';
import './style/theme.scss'
import { useState } from 'react';
import TodoList from './components/TodoList';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className={`App ${theme}`}>
      <div className='container'>
        <div className='content'>
            <div className='header'>
              <h4 className='header-title'>TODO</h4>
              <span onClick={toggleTheme} style={{ cursor:'pointer' }}>
                {theme === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>}
              </span>
              {/* <LightModeIcon/> */}
              {/* <button onClick={toggleTheme}>Change Theme</button> */}
            </div>
            <TodoList />
        </div>
      </div>
      {/* <header>
      
      </header> */}


    </div>
  );
}

export default App;
