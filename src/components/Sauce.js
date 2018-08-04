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
    state = {
        sauce: ''
      };
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }; 
    createMenuItem = (item) => {
      return (<MenuItem value={item.name}>{item.name}</MenuItem>)
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
                  value={this.state.sauce}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'sauce'
                  }}
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {this.props.sauces.map(this.createMenuItem)}
              
              </Select>
            </FormControl> 
            </div>
        );
    }
}             

export default withStyles(styles)(Sauce);







