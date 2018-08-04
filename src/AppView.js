import React, { Component } from 'react';
import './App.css';
import Base from './components/Base';
import Sauce from './components/Sauce';
import Toppings from './components/Toppings';
import OrderDetails from './components/OrderDetails';
import { withStyles } from '@material-ui/core';


class AppView extends Component {
  render() {
   
    console.log(this.props.bases);
    return (
      <div className="App">
       <h1>Welcome to New Age Pizza</h1>
        <div className="content">
          <form> 
            <Base bases={this.props.bases}/>
            <br />
            <Sauce sauces={this.props.sauces}/>
            <br />
            <Toppings toppings={this.props.toppings}/>
          </form>
          <OrderDetails />
        </div>
      </div>
    );
  }
}

export default AppView;