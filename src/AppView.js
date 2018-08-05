import React, { Component } from 'react';
import './App.css';
import Base from './components/Base';
import Sauce from './components/Sauce';
import Toppings from './components/Toppings';
import OrderDetails from './components/OrderDetails';
import DeliveryDetails from './components/DeliveryDetails';


class AppView extends Component {
  render() {
   
    
    return (
      <div className="App">
       <h1>Welcome to New Age Pizza</h1>
        <div className="content">
          <form> 
            <Base bases={this.props.bases} selectedBase={this.props.selectedBase} onBaseChange={this.props.onBaseChange}/>
            <br />
            <Sauce sauces={this.props.sauces} selectedSauce={this.props.selectedSauce} onSauceChange={this.props.onSauceChange}/>
            <br />
            <Toppings toppings={this.props.toppings} selectedToppings={this.props.selectedToppings} onToppingChange={this.props.onToppingChange}/>
            <DeliveryDetails delivery={this.props.delivery} />
          </form>
          <OrderDetails />
        </div>
      </div>
    );
  }
}

export default AppView;