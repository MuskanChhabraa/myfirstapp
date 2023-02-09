//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
//import About from './Components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
     if(mode === 'light')
     {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled","success");
  }
}

  return (
    <>
    
<Navbar title="bolg" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
  <Textform showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode} ></Textform>*/
  {/*<About/>*/}
</div>

</>
    
  );
}

export default App;
