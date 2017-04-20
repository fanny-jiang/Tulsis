import Catalog from '../components/Catalog'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    products: state.products.productsList
  }
}

const CatalogContainer = connect(
  mapStateToProps
)(Catalog)

export default CatalogContainer
