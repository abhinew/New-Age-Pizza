import React, { Component } from 'react';

import Checkbox from '@material-ui/core/Checkbox';

import FormControlLabel from '@material-ui/core/FormControlLabel';
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


class DeliveryDetails extends Component {
    
    handleChange = event => {
       // this.setState({ [event.target.name]: event.target.value });
    }; 
   
    render() {
       
        return (    
            <div>
                <label>
              Choose delivery:
            </label>
            <br />
            <FormControlLabel control={<Checkbox value="checkedC" />} label="Add Turbo Drone Delivery for 10% extra" />
            </div>
        );
    }
}             

export default withStyles(styles)(DeliveryDetails);







