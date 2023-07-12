import Product from "./Product"

const ProductList = ({ products, onMove }) => {
    
    return (
        <div className='col-md-7'>

            <h3>Products ({products.length})</h3>
            <div className='row'>
                {
                    products.map(elm => <Product key={elm.id} data = {elm} onMove = {onMove} />)
                }
            </div>
        </div>
    )
}
export default ProductList