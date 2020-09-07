import React from 'react';
import './App.css';
import ProductTable from './components/ProductTable'

const products=[{price:"1000$",name:"iphone pro",category:"smartphone apple"},
{price:"60$",name:"t-shirt",category:"clothes"},
{price:"500$",name:"macBook Pro",category:"ordinateur"},
{price:"70$",name:"watches",category:"Swatch"},
{price:"10$",name:"pizza",category:"food"},
]

function App() {
  return (
    <ProductTable tableau={products}/>
  );
}

export default App;
