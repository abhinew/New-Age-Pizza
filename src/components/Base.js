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
      
      
    render() {
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
                <MenuItem value={"25 cm NY Style € 8,99"}>25cm NY Style € 8,99</MenuItem>
                <MenuItem value={"30cm NY Style € 11,49"}>30cm NY Style € 11,49</MenuItem>
                <MenuItem value={"35cm NY Style € 13,49"}>35cm NY Style € 13,49</MenuItem>
                </Select>
                </FormControl> 
            </div>
        );
    }
}             

export default withStyles(styles)(Base);