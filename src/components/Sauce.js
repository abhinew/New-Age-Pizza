import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

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


class Sauce extends Component {
   
    handleChange = event => {
      
      this.props.onSauceChange(event.target.value);
    }; 
    createMenuItem = (item) => {
      return (<MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>)
    }  
    render() {
        const { classes } = this.props;
        return (    
            <div>
                <label>
              Choose sauce:
            </label>
            <br />
            <FormControl className={classes.formControl}>
                <Select
                  value={this.props.selectedSauce.name}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'sauce'
                  }}
                >
                {this.props.sauces.map(this.createMenuItem)}
              
              </Select>
            </FormControl> 
            </div>
        );
    }
}             

export default withStyles(styles)(Sauce);







