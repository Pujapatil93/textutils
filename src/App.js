import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
 //import {
 // BrowserRouter as Router,
 // Routes,
 //Route
 //} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type)=>{
    setAlert({
    msg: Message,
    type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success")
    document.title = 'TextUtils - Light Mode';
  }
}
const toggleMode2 = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0b5c0b';
      showAlert("Green mode has been enabled", "success")
      document.title = 'TextUtils - Green Mode';
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success")
    document.title = 'TextUtils - Light Mode';
  }
}
  return (
    <>
    { /* <Navbar title="TextUtils" aboutTextutils="About TextUtils" /> */}
    { /* <Navbar/> */}
    {/*<Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
     {/*} <Routes> */}
        {/*  <Route exact path ='/about' element={<About/>}></Route> */}
        {/*  <Route exact path ='/' element={ */}
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
        {/* </Route> */}
{/*</Routes> */}
    </div>
   {/* </Router>*/} 
    </>
     );
}

export default App;
