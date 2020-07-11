import { connect } from 'react-redux'
import ProductsList from './ProductsList'

const mapStateToProps = state => ({
    productsList: state.products,
    modal:        state.modal,
});

export default connect(
    mapStateToProps,
    null
)(ProductsList)
