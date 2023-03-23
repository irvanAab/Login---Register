import { useState } from 'react';
import Login from './component/Login'
import Register from './component/Register'
import './App.css';

function App() {
const [currentPage, setCurrentPage] = useState('login')

const switchPage = (formPage) =>{
  setCurrentPage(formPage)
}

  return (
    <div className='App'>
      {currentPage === 'login' ? <Login onFormSwitch={switchPage}/> : <Register onFormSwitch={switchPage}/>}
    </div>
  ); 
}

export default App;
