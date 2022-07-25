import React from 'react';
import logo from './logo.svg';
import './App.css';

import User from './components/4-children/User';



const users = 
  {
   
    name: "Satyaki Saha",
    email: "satyaki95@outlook.com",
    age: 32,
    isRegistered: true,
    languages: ["Bangla", "English"],
  };
  

function App() {
  return (
    <div className="App">
     <h1>React typescript</h1>
    <User user={users}/>
    </div>
  );
}

export default App;
