import './App.css';
import { useState } from 'react';
import Index from '../Index/IndexPage';
import AuthPage from '../AuthPage/AuthPage';
import ShowOne from '../Show/ShowOne';
import ShowTwo from "../Show/ShowTwo";
import ShowThree from "../Show/ShowThree";
import About from '../About/About';
import { getUser } from '../../utilities/users-service.js'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Header from '../../components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [user, setUser ] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false)

  const signOut = (e) => {
    e.preventdefault();
    localStorage.clear();
  }

  return (
    <main >
       
    <Header user={ user } signOut={ signOut } showSignUp={ showSignUp } setShowSignUp={ setShowSignUp }/>
    <ChakraProvider>
      {
        !user ? <AuthPage setUser={setUser} showSignUp={showSignUp}/> : (
        <Routes>
          <Route path="/" element={<Index setUser={ setUser } user={user} /> } />
        </Routes>)
      }
      </ChakraProvider>
       <Routes>
            <Route path="/about" element={ <About /> } />
            <Route path="/pic1" element={ <ShowOne user={user} setUser={setUser}/> } />
            <Route path="/pic2" element={ <ShowTwo user={user} setUser={setUser}/>} />
            <Route path="/pic3" element={ <ShowThree user={user} setUser={setUser}/>} />
      </Routes>
    </main>
  );
}

export default App;
