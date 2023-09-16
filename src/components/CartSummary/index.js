import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let sum1 = 0
      cartList.forEach(element => {
        sum1 += element.price * element.quantity
      })
      console.log(sum1)
      return (
        <div>
          <h1>Order Total: Rs{sum1}</h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
