import Cart from '../components/Cart'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log('cart container state', state)
  return {
    cart: state.cart.orderItems
  }
}

const CartContainer = connect(mapStateToProps)(Cart)

export default CartContainer
