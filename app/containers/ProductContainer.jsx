import Product from '../components/Product'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    products: state.productsList
  }
}

export default connect(mapStateToProps)(Product)
