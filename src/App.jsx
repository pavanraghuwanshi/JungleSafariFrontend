import { BrowserRouter as Router , Route , Routes  } from "react-router-dom"



import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'


import Home from "./Pages/Home";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./Pages/About.jsx";
import Destination from "./Pages/Destination.jsx";
import Register from "./Pages/Register.jsx";
import Feedback from "./Pages/Feedback.jsx";
import Memories from "./Pages/Memories.jsx";
import PrivateComponent from "./Pages/PrivateComponent.jsx";
import Logout from "./Pages/Logout.jsx";
import RegisterTrial from "./Pages/TrialRegister.jsx";
import EmailPage from "./Pages/EmailPage.jsx";



function App() {



  return (

    <Router>
    <Header/>
  <Routes>
  <Route path="/" element ={<Home/>}   />

    <Route  element = {<PrivateComponent/>}>

     </Route>
    <Route path="/about" element ={<About/>}   />
     <Route path="/destination" element ={<Destination/>}/>
     <Route path="/feedback" element ={<Feedback/>}  />
     <Route path="/memories" element ={<Memories/>}  />
     <Route path="/logout" element ={<Logout/>}  />




     <Route path="/email" element ={<EmailPage/>}  />
     <Route path="/register" element ={<Register/>}  />

  </Routes>
  

     <Footer/>

</Router>
  );

  
}

export default App
