import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, clicked1, message, text, change1} = value
      let sum1 = 0
      cartList.forEach(element => {
        sum1 += element.price * element.quantity
      })
      console.log(sum1)
      return (
        <div>
          <h1>Order Total: Rs{sum1}</h1>
          <p>{cartList.length} Items in cart</p>
          <Popup
            trigger={open => (
              <button type="button" className="button">
                {' '}
                {open ? 'Close' : 'Checkout'}
              </button>
            )}
            position="right center"
            closeOnDocumentClick
          >
            <div className="payment">
              <input type="radio" id="r1" name="payment" disabled />
              <label htmlFor="r1">Net Banking</label>
              <input type="radio" onChange={change1} id="r2" name="payment" />
              <label htmlFor="r2">Cash on Delivery</label>
              <div>
                <h1>Order Total: Rs{sum1}</h1>
                <p>{cartList.length} Items in cart</p>
              </div>
              <button type="button" disabled={text} onClick={clicked1}>
                Confirm Order
              </button>
              {message && <p>Your order has been placed successfully</p>}
            </div>
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
