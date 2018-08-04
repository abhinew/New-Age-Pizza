import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
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
    render() {
        const { classes } = this.props;
        return (    
            <div>
               <label>
              Choose maximum three toppings:
                </label>
                <br />
                <FormControlLabel control={<Checkbox value="checkedC" />} label="Pineapple" />
                <FormControlLabel control={<Checkbox value="checkedC" />} label="Corn" />
                <FormControlLabel control={<Checkbox value="checkedC" />} label="Olives" />
                <FormControlLabel control={<Checkbox value="checkedC" />} label="Red Onions" />
                <FormControlLabel control={<Checkbox value="checkedC" />} label="Spinach" />
                <FormControlLabel control={<Checkbox value="checkedC" />} label="Cherry tomatoes" />
                
            </div>
        );
    }
}             

export default withStyles(styles)(Toppings);







