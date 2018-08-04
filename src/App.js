import React, { Component } from 'react';
import './App.css';
import Base from './components/Base';
import Sauce from './components/Sauce';
import Toppings from './components/Toppings';
import OrderDetails from './components/OrderDetails';


export default class App extends Component {
 
  render() {
   
    return (
      <div className="App">
       <h1>Welcome to New Age Pizza</h1>
        <div class="content">
          <form> 
            <Base />
            <br />
            <Sauce />
            <br />
            <Toppings />
          </form>
          <OrderDetails />
        </div>
      </div>
    );
  }
}

