import AppView from "./AppView";
import { connect } from "react-redux";
import { onBaseSelect, onSauceSelect, onToppingSelect } from './actions/ActionCreators';


function mapStateToProps(state) {
    
    
    return {
        toppings: state.toppings,
        bases: state.bases,
        sauces: state.sauces,
        delivery: state.delivery,
        selection: state.selection,
        total: state.total
    };
}



function mapDispatchToProps(dispatch, getState) {
    
    return {
        onBaseChange: function(base) {
            dispatch(onBaseSelect(base));
        },
        onSauceChange: function(sauce) {
            dispatch(onSauceSelect(sauce));
        },
        onToppingChange: function(topping) {
            dispatch(onToppingSelect(topping));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);

