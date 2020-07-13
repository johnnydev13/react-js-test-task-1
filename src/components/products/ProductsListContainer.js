import { connect } from 'react-redux'
import ProductsList from './ProductsList';
import { getNextId } from './selectors';

const mapStateToProps = state => ({
    productsList:  state.products,
    nextProductId: getNextId(state.products),
    modal:         state.modal,
});

export default connect(
    mapStateToProps,
    null
)(ProductsList)
