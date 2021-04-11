import React, { useState, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import './Products.css';
import ProductCart from './ProductCart';
function Products() {

  let { categoryId } = useParams();

  const [data, setData] = useState([]);
  const getData = () => {
    fetch('../data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log('response', response)
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }

  // useEffect(() => {
  //   <Welcome name="giktrth"/>
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  useEffect(() => {
    getData()
  }, [])
let arrNames = [];
if (data && data.length) {
  let arr = data.filter(item => item.CategoryName === categoryId);
  // console.log("arr", arr, categoryId, data);

  arrNames = arr[0].Products.map(item => <tr key={item.id} >
    <td  >{item.name}</td>שקלים<td  onClick={() => {alert(item)}}>{item.price}</td></tr>)
  // console.log('arrNames', arrNames);
 
}
  return (
    <div>
      <h3>{categoryId}</h3>
      <div>
      {arrNames}</div>
     <div>
     <h2>בסל הקניות</h2> 
        <ProductCart name="lego" price="46577" onClick="abc()"/>
        <ProductCart name="etet" price="465747" onClick="abc()"/>
       {/* <ProductCart name="etr"/> */}
     {
      // this.props.Products.map(p => (
      // <Products 
      //     key={p.id}
      //     name={p.name}
      //     price={p.price} />
      // ))
  }
      
     </div>
    </div>
  );
}

export default Products;


// let list1=[];
// function Welcome(props) {
//   const list=[];
 
//   list.push(props.name);
//   console.log("list",list);
//   list1.push(props.name);
//   console.log("list1",list1);
//   return <h4>{props.name}</h4>;
// }
