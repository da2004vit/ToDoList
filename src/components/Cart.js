import CartItem from "./CartItem"


const Cart = ({cart,total,onReduce,onRemove,onAdd})=>{
  
    return (
        <div className='col-md-5'>

            <h3>cart {total} USD</h3>
          <table className='table table-dark table-bordered'>
            <thead>
              <tr>
                <th>products</th>
                <th>price</th>
                <th>quantity</th>
                <th>subtotal</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(elm => <CartItem key={elm.id}  data2 = {elm}  onAdd = {onAdd} onReduce = {onReduce} onRemove = {onRemove} />)
              }
            </tbody>
          </table>
        </div>
      

    )
}
export default Cart