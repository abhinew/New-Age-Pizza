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
   

    handleChange = event => {
        
        
        this.props.onBaseChange(event.target.value);
    };

    createMenuItem = (item) => {
        return (<MenuItem key={item.type} value={item.type}>{item.type}</MenuItem>)
    }  
      
    render() {
       
        const { classes } = this.props;
        console.log(this.props);
        
        return (    
            <div>
                <label>
                Choose base:
                </label>
                <br />
                <FormControl className={classes.formControl}>
                    <Select
                        value={this.props.selectedBase.type}
                        onChange={this.handleChange}
                        inputProps={{
                        name: 'base'
                        // id: 'age-simple',
                        }}
                    >
                   
                    {this.props.bases.map(this.createMenuItem)}
                
                    </Select>
                </FormControl> 
            </div>
        );
    }
}             

export default withStyles(styles)(Base);