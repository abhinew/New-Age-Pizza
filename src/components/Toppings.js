import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

import FormControlLabel from '@material-ui/core/FormControlLabel';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
});

class Toppings extends Component {
   state = {
    showError: false
   };
    handleChange = event => {
        let topping = event.target.value;
        
        
        if(this.props.selectedToppings.length < 3 || (this.props.selectedToppings.indexOf(topping) !== -1)) {
            this.props.onToppingChange(topping);
            this.setState({showError: false});
        }
        else {
            this.setState({showError: true});
        }
    }; 
    isChecked = (topping) => {
        if(this.props.selectedToppings.indexOf(topping) === -1) {
            return false;
        }
        else {
            return true;
        }
        
    }
    createMenuItem = (topping) => {
        
        return (<FormControlLabel key={topping} control={<Checkbox
            checked={this.isChecked(topping)}
            onChange={this.handleChange}
            value={topping}
            color="primary"
            />} 
            label={topping} 
            />)
    }
    render() {
        
       
    
        return (    
            <div>
               <label>
              Choose maximum three toppings:
                </label>
                <br />
                {this.props.toppings.map(this.createMenuItem)}
                { this.state.showError? <p style={{color: 'red'}}>You can choose maximum three toppings only</p>: null}
                
            </div>
        );
    }
}             

export default withStyles(styles)(Toppings);







