import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


// function App() {
//   const[age,setAge] = useState(0)
//   const[salary,setSalary] = useState(300000)
//   // // useEffect(() =>{
//   //   //console.log("Ok")
//   // // })
//   //// useEffect(() =>{
//   //  // console.log("Ok")
//   // // },[])
//   useEffect(() =>{
//     console.log("Ok")
//    },[age,salary])   // // ete age kam salaryn hanenq  console um dranc buttonerin sexmeluc ok chi tpi

//   return (  
//         <div className='container'>
//              <h1>{age} salary-{salary}</h1>
//              <button onClick = {()=>setAge(age+1)}>up</button>
//              <button onClick = {()=>setSalary(salary-20000)}>down</button>

//          </div>
//   )
// }
function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [categories, setCategories] = useState([])
  const [currentFilter, setCurrentFilter] = useState("All")

  const moveToCart = (prod) => {
    const existingItem = cart.find((item) => item.id === prod.id);

    if (existingItem) {
      existingItem.quantity++
      setCart([...cart]);
    } else {
      setCart([...cart, { ...prod, quantity: 1 }]);
    }
  };


  const sortMax = () => {
   
    products.sort((a,b)=> a.price - b.price )
    setProducts([...products]);
    // console.log(sortedMax)
  }

  const sortMin = () => {
   
    products.sort((a,b)=> b.price - a.price )
    setProducts([...products]);
    
  }

  const add = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(updatedCart);
  };

  const reduce = (id) => {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 < 1 ? item.quantity : item.quantity - 1 } : item
      );
      setCart(updatedCart);
  };

  const remove = (productId) => {
    const updatedCard = cart.filter(item => item.id !== productId);
    setCart(updatedCard);
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, b) => acc + b.quantity * b.price, 0))
  }, [cart])


  useEffect(() => {
    let url = "https://fakestoreapi.com/products"
    if (currentFilter != "All") {
      url += `/category/${currentFilter}`
    }
    fetch(url)
      .then(result => result.json())
      .then(result => setProducts(result))
  }, [currentFilter])

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then(result => result.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      })
    fetch("https://fakestoreapi.com/products/categories")
      .then(result => result.json())
      .then(result => {
        setCategories(["All", ...result])
      })

  }, [])
  
  return (
    <div className='container'>
      <h1>Online Shop</h1>
      <Filter
      onSortMin={sortMin}
      onSortMax = {sortMax}
      currentFilter={currentFilter}
      categories={categories}
      onFilter={setCurrentFilter}
      />
      {/* <p>current Filter : <strong>{currentFilter}</strong></p>
      <div> 
        {
          categories.map((elm, i) => {
            let style = elm == currentFilter ? "btn btn-dark mx-1" : 'btn btn-outline-info mx-2'
            return <button key={i} className={style} onClick={() => setCurrentFilter(elm)}> {elm} </button>
          })
        }
      </div> */}
      <br></br>
      <div className='row'>
        <ProductList 
          products = {products}
          onMove={moveToCart}
        />
        {/* <div className='col-md-5'> */}
          <Cart
           cart = {cart}
           total = {total}
           onAdd = {add}
           onReduce = {reduce}
           onRemove = {remove}
          
          />
          {/* <h3>cart {total} USD</h3>
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
                cart.map(elm => {
                  return < tr key={elm.id}>
                    <td>{elm.title}</td>
                    <td>{elm.price}</td>
                    <td>{elm.quantity}</td>
                    <td>{elm.quantity * elm.price}  USD</td>
                    <td>
                      <button className='btn btn-success btn-sm' onClick={() => add(elm.id)} >+</button>
                      <button className='btn btn-warning btn-sm' onClick={() => reduce(elm.id)}>-</button>
                      <button className='btn btn-danger btn-sm' onClick={() => remove(elm.id)}>x</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table> */}
        {/* </div> */}
      </div>
    </div>


  )
}

export default App;
//// funkcional componentner (hook)  - use