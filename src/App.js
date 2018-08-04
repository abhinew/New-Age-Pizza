import AppView from "./AppView";
import { connect } from "react-redux";


function mapStateToProps(state) {
    
    
    return {
        toppings: state.toppings,
        bases: state.bases,
        sauces: state.sauces,
        selection: state.selection,
        total: state.total
    };
}
function mapDispatchToProps() {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);