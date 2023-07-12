const CartItem = ({data2, onAdd , onReduce , onRemove})=>{
    return (
        
            <tr key={data2.id}>
                <td>{data2.title}</td>
                <td>{data2.price}</td>
                <td>{data2.quantity}</td>
                <td>{data2.quantity * data2.price}  USD</td>
                <td>
                    <button className='btn btn-success btn-sm' onClick={() => onAdd(data2.id)} >+</button>
                    <button className='btn btn-warning btn-sm' onClick={() => onReduce(data2.id)}>-</button>
                    <button className='btn btn-danger btn-sm' onClick={() => onRemove(data2.id)}>x</button>
                </td>
            </tr>
        
    )
}
export default CartItem