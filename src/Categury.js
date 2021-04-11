import React,{useState,useEffect} from 'react';
import './Categury.css';
import Products from './Products';
import {
    Switch,
    Route,
    useRouteMatch,
    Link
} from "react-router-dom";
function Categury() {

  function handleClick(i) {
  }

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('./data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  let match = useRouteMatch();

  return (
    <div className="Categury" onClick={handleClick}>
 
  <div>
    <h2>Categuries</h2>
   <nav>
      
      {
        data && data.length>0 && data.map((item)=>
        <span className="span"><Link to ={`${match.url}/${item.CategoryName}`}> {item.CategoryName} </Link> </span>)
     } 
    </nav>

    <Switch>
      <Route path={`${match.path}/:categoryId`}>
        <Products />
      </Route>
      <Route path={match.path}>
        <h3>Please select a categury.</h3>
      </Route>
    </Switch>
  </div>
    </div>
  );
}
export default Categury;

