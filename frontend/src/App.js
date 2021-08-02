import {React, useState} from "react"; 
import './App.css';
import Navbar from "./Components/Navbar"; 
import Header from "./Components/Header"; 
import './styles/main.css'; 
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import AudioPlayer from "./Components/AudioPlayer"; 

function App() {
  const [percentage, setPercentage] = useState(0)
  const onChange = (e) => {
    setPercentage(e.target.value)
  }
  return (
    <body class = "h-screen bg-gray-900 text-gray-300">
      
      <Header />
      <Navbar/> 
      <AudioPlayer/> 
    </body>
   
    

  )

}

export default App;



