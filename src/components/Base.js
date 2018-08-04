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


class Base extends Component {
    state = {
        base: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    createMenuItem = (item) => {
        return (<MenuItem value={item.type}>{item.type}</MenuItem>)
    }  
      
    render() {
        console.log(this.props.bases);
        const { classes } = this.props;
        
        return (    
            <div>
                <label>
                Choose base:
                </label>
                <br />
                <FormControl className={classes.formControl}>
                <Select
                    value={this.state.base}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'base'
                    // id: 'age-simple',
                    }}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {this.props.bases.map(this.createMenuItem)}
             
                </Select>
                </FormControl> 
            </div>
        );
    }
}             

export default withStyles(styles)(Base);