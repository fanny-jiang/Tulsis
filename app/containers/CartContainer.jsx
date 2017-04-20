import Cart from '../components/Cart'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log('FROM CART CONTAINER: ', state)
  return {
    cart: state.cart.cart
  }
}

const CartContainer = connect(mapStateToProps)(Cart)

export default CartContainer
