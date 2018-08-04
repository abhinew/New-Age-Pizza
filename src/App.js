import AppView from "./AppView";
import { connect } from "react-redux";
import { onBaseSelect } from './actions/ActionCreators';

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


console.log(onBaseSelect);


function mapDispatchToProps(dispatch, getState) {
    return {
        onBaseChange: function () {
            dispatch(onBaseSelect());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);

