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
        toppings: ''
      };
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });

    }; 
    createMenuItem = (item) => {
        return (<FormControlLabel control={<Checkbox value="checkedC" />} label={item} />)
    }
    render() {
        const { classes } = this.props;
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







