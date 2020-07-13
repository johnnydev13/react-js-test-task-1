import { connect } from 'react-redux'
import MainSection from './MainSection';

import { getNextId } from './products/selectors';

const mapStateToProps = state => ({
    productsList:  state.products,
    nextProductId: getNextId(state.products),
    modal:         state.modal,
});

export default connect(
    mapStateToProps,
    null
)(MainSection)
