import logo from './logo.svg';
import './App.css';
import Product from './Product';
import { useState, useEffect } from 'react';


function App() {
  const [products, setProducts] = useState([])

  function updateData() {
    fetch("http://127.0.0.1:8000/product/")
      .then(response => response.json())
      .then(data => setProducts(data))
  }

  useEffect(updateData, [])
    // updateData()

    // async function postData(url = '', data = {}) {
    //   // Default options are marked with *
    //   const response = await fetch(url, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //       'Content-Type': 'application/json'
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrerPolicy: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data) // body data type must match "Content-Type" header
    //   });
    //   return await response.json(); // parses JSON response into native JavaScript objects
    // }


  return (
    <div className="App">
      <h3>Hello JS GROUP!</h3>
      <div>
        {products.map(item => <Product key={item.id} item={item}/>)}
      </div>

    </div>
  );
}

export default App;
