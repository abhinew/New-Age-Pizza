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
    toppingCount = 0;
    state = {
      
        
     
      };
      handleChange = topping => event => {
            
       
            this.setState({ [topping]: event.target.checked });
            
            this.props.onToppingChange(topping);
    }; 
    createMenuItem = (topping) => {
        
        return (<FormControlLabel key={topping} control={<Checkbox
            checked={this.state.topping}
            onChange={this.handleChange(topping)}
            value={this.state.topping}
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
                
                
            </div>
        );
    }
}             

export default withStyles(styles)(Toppings);







