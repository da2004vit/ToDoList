const Product= ({data,onMove})=>{
    return (
        <div className='col-md-4 my-4'>
        <img src={data.image} style={{ width: 200, height: 200 }} />
        <h5>{data.title.slice(0, 15)}...</h5>
        <p className='text-danger'>{data.price} USD</p>
        {new Array(Math.floor(data.rating.rate))
            .fill("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-256.png")
            .map((e, i) => <img style={{ width: 20 }} src={e} key={e + i} />)
        }
        {/* <br /> */}
        

        <button className='btn btn-warning' onClick={() => onMove(data)}>MOVE</button>
        </div>
    )
}
export default Product