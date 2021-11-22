import React, {useEffect, useState}  from 'react';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/skills';
import Experience from './Experience/Experience';
import Myprojects from './Myprojects/project';
import Contact from './Contact/Contact'
import Footer from './Footer/Footer';
import ScaleLoader
 from "react-spinners/ScaleLoader";
import './App.css'

function App() {
  const[loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    }, 3000)
  },[]);
  return (
    <div>
      {
        loading ?
        <div className="App">
          <ScaleLoader
        className="loader"
        style={{marginTop:"250px"}}
        color={"#00D4FF"}
         loading={loading}
         size={60} 
           />
       </div>
        :
       <div>
        <Header/>
        <About/>
        <Skills/>
        <Experience/>
        <Myprojects/>
        <Contact/>
        <Footer/>
         </div>   
      }    
     
    </div>
  );
}


export default App;
