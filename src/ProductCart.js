import React ,{useState,useEffect}from 'react';
import './ProductCart.css';
import Products from './Products';
let arr=[];
function ProductCart(props) {
arr.push(props);
console.log("arr",arr);
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
        console.log("myjsonfrompcard",myJson);
         setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[props])
    // return ( 
    //   <div>
    //     <h3>ProductCart</h3>
    //   {data.map(item => (
    //     <p key={item.id}>
    //       {item.Products.map(p=>(
    //         <p>{p.name}</p> )
    //       )}
    //     </p>
    //   ))}
    //   </div>
     
    // );
  
 if(props){
   
 }


return (
  <div>
  {/* {
      this.props.Products.map(p => (
      <Products 
          key={p.id}
          name={p.name}
          price={p.price} />
      ))
  } */}
 
  <tr>
    {
      console.log(arr)
    //  arr.forEach(a=>{
    //    <td>{a.name}</td>
    //  })
    }
  </tr>
  {arr[0].name}
 
</div>
);
}

export default ProductCart;
