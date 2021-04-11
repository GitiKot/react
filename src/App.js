 import Categury from "./Categury";
 import GetWeather from './getWeather';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

  function App() { 
   
       return ( < div className = "App" >
        
         <h1 style={{"textAlign": "center"}}>חנות הכל בו</h1>
         
         {/* <div><GetWeather/></div> */}
         <Router>
      <div>
        <Switch>
          <Route path="/categury">
          <Categury/>
          </Route>
        </Switch>
      </div>
    </Router>    
     
 </div> )}
    

    export default App;
