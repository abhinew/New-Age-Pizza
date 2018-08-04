import React, { Component } from 'react';
import './App.css';
import Base from './components/Base';
import Sauce from './components/Sauce';
import Toppings from './components/Toppings';
import OrderDetails from './components/OrderDetails';
import { withStyles } from '@material-ui/core';
import DeliveryDetails from './components/DeliveryDetails';


class AppView extends Component {
  render() {
   
    
    return (
      <div className="App">
       <h1>Welcome to New Age Pizza</h1>
        <div className="content">
          <form> 
            <Base bases={this.props.bases} onBaseChange={this.props.onBaseChange}/>
            <br />
            <Sauce sauces={this.props.sauces}/>
            <br />
            <Toppings toppings={this.props.toppings}/>
            <DeliveryDetails delivery={this.props.delivery} />
          </form>
          <OrderDetails />
        </div>
      </div>
    );
  }
}

export default AppView;