import { BrowserRouter,Routes,Route } from "react-router-dom";
import {useState} from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Cart from "./Cart";
import Navbar from "./Navbar"
import ProductDetails from "./ProductDetails";
import ProductDetailsInfo from "./ProductDetailsInfo";
import ProductDetailsPrep from "./ProductDetailsPrep";
import ProductDetailsTaste from "./ProductDetailsTaste";

const App = () => {

  const [cart,setCart] = useState([]);

  const handleProductAdd = (newProduct) => {
    if(!(cart.find(element=>element.id===(newProduct.id))))
      {
        setCart([...cart,{
          ...newProduct,
          quantity: 1
        }])
    } else{
        const update = cart.map(element => {
          if (element.id===(newProduct.id)){
            return {...element,quantity:(element.quantity+=1)};
          } else {
            return element
          }
        })
        return setCart(update)
    }
  }

  const handleProductDelete = (id) => {
    const update = cart.filter(element=>element.id!==(id))
    return setCart(update)
  }

  return (<>
    <BrowserRouter>
    <Navbar cart={cart}/>
      <div class="container">
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/products/" element={<Products cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete}/>}></Route>
              <Route path="/products/:id" element={<ProductDetails  onProductAdd={handleProductAdd}/>}>
                <Route path="" element={<ProductDetailsInfo onProductAdd={handleProductAdd}/>}></Route>
                <Route path="prep" element={<ProductDetailsPrep />}></Route>
                <Route path="taste" element={<ProductDetailsTaste />}></Route>
              </Route>
              <Route path="/cart" element={<Cart cart={cart}/>}></Route>
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  </>)
}

export default App;
 

