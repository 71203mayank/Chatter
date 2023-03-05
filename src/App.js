import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/LoginPage/LoginPage';
import PageOne from './Components/PageOne/PageOne';
;

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <PageOne/>
      <Footer/>
    </div>
  );
}

export default App;
