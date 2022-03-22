import './App.scss';
import './style/theme.scss'
import { useState } from 'react';
import TodoList from './components/TodoList';
import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg'

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
            <div className='header'>
              <h4 className='header-title'>TODO</h4>              
              <span onClick={toggleTheme} style={{ cursor:'pointer' }}>
                {theme === 'dark' ? <img src={sun} alt='light'/> : <img src={moon} alt='dark'/>}
              </span>
              {/* <LightModeIcon/> */}
              {/* <button onClick={toggleTheme}>Change Theme</button> */}
            </div>
            <TodoList />
      </div>
      {/* <header>
      
      </header> */}
    </div>
  );
}

export default App;
