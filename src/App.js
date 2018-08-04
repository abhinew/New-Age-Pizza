import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

class App extends Component {
  state = {
    base: '',
    name: 'hai',
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const { classes } = this.props;
    return (
      <div className="App">
       <h1>Welcome to New Age Pizza</h1>
        <div class="container">
          <form> 
            <label>
              Choose base:
            </label>
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
          
            <label>
              Choose sauce:
            </label>
            <label>
              Choose toppings:
            </label>
          </form>
          <div className="order-details">
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(App);
