import Catalog from '../components/Catalog'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    products: state.productsList
  }
}

const CatalogContainer = connect(
  mapStateToProps
)(Catalog)

export default CatalogContainer
