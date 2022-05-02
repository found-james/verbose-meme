import './App.css';
import { useState } from 'react';
import Index from '../Index/IndexPage';
import AuthPage from '../AuthPage/AuthPage';
import Show from '../Show/ShowPage';
import About from '../About/About';
import { getUser } from '../../utilities/users-service.js'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [user, setUser ] = useState(null);

  const handleClick = (e) => {
    e.preventdefault();
    localStorage.clear();
  }

  return (
    <main className="App">
      <header>
        {
          user ? (
            <>
            <Link to="/" onClick={ handleClick }><p> logout </p></Link>
            <Link to="/about"><p> about </p></Link>
            <Link to="/"><p>back to index</p></Link>
            </>
          ): (
            <>
            <p>about</p>
            </>
          )
        }
        <Routes>
            <Route path="/about" element={ <About /> } />
            <Route path="/user/pic1" element={ <Show user={user} setUser={setUser}/> } />
            <Route path="user/pic2" element={ <Show /> } />
            <Route path="user/pic3" element={ <Show /> } />
        </Routes>
      </header>
      {
        user ?
        <Routes>
          <Route path="/" element={<Index />}/>
        </Routes>
        :
        <AuthPage setUser={setUser}/>
      }


    </main>
  );
}

export default App;
