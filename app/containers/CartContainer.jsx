import Cart from '../components/Cart'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    qty: state.qty,
    cart: state.cart,
    allCarts: state.allCarts
  }
}

const CartContainer = connect(mapStateToProps)(Cart)

export default CartContainer
