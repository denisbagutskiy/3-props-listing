import React from 'react';
import './App.css'; 
import items from './etsy.json';
import Listing from './components/Listing';

function App() {
  return (
    <div className="wrapper">
        <Listing items={items}></Listing>
    </div>
  );
}

export default App;
