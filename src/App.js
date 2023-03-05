import React, { createContext, useState } from 'react';
import './App.css';
// import Footer from './Components/Footer/Footer';
import LoginPage from './Components/LoginPage/LoginPage';
import PageOne from './Components/PageOne/PageOne';
;

const userContext = createContext()

function App() {
  const [user, setUser] = useState()

  return (
    <div className="App">
      <userContext.Provider value={{ uctx: [user, setUser]}}>
        {(!user)?<LoginPage/>:<PageOne />}
        
        {/* <Footer/> */}
      </userContext.Provider>
    </div>
  );
}

export default App;
export { userContext }
