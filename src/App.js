import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';
import Alert from './components/Alert.jsx';
import AboutUs from './components/AboutUs.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [title, aboutText] = ["TextUtils", "About Us"];
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [colorCode, setcolorCode] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message:message,
      type:type
    });
    setTimeout(()=>{ setAlert(null); },1500)
  }


  function toggleDarkMode () {
    // console.log('the value of the mode',mode);
    mode === 'light' ? document.body.style.backgroundColor='#042743' : document.body.style.backgroundColor='#fff';
    // setMode(mode ==='dark' ? 'light' : 'dark');
    if(mode === 'dark') {
      setMode('light');
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");  
    }
  }
 
  const updateColorCode = (selectedColor) => {
  console.log("checking color code/..selecred", selectedColor );
  setcolorCode(selectedColor);
  }
    
 

  return (

    <BrowserRouter>
    <div className="App">
       <Navbar title={title} aboutText={aboutText} mode={mode} 
        toggleMode={toggleDarkMode}
        updateColorCode = {updateColorCode}
      />
      <Alert alert={alert}/>

        <Routes>

        <Route exact path='/' element={
          <TextForm showAlert={showAlert}
          colorCode={colorCode}
          heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" 
          mode={mode} />}>
        </Route>

        <Route exact path='/about' element={<AboutUs props={mode}/>}></Route>
        
        </Routes>
       {/* colorCode='#042743' */}
    </div>
    </BrowserRouter>
  );

}

export default App;
