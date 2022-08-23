import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        showtype: type
      }
    );
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      console.log(mode);
      document.body.style.backgroundColor = "#191970";
      setmode("dark");
      showAlert("Dark mode is enabled", "success");
    }
    else {
      console.log(mode);
      document.body.style.backgroundColor = "white";
      setmode("light");
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" Mode={mode} togglemode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Textform heading="Enter the Text here to Analyze" Mode={mode} alertshow={showAlert} />} ></Route>
        <Route path="/About" element={<About  Mode={mode} />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
