import './App.css';
import Navbar from "./Components/Navbar"; 
import Header from "./Components/Header"; 
import './styles/main.css'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <body class = "h-screen bg-gray-900 text-gray-300">
      
      <Header />
      <Navbar/> 

    </body>
   
    

  );

}

export default App;



