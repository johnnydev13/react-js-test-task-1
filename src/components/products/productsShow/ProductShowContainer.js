import { connect } from 'react-redux'
import ProductShow from './ProductShow';
//import { getNextId } from '../selectors';

const mapStateToProps = (state, props) => ({
    productsList: state.products,
    //nextProductId:   getNextId(state.products),
    //modal:           state.modal,
});

export default connect(
    mapStateToProps,
    null
)(ProductShow)
