import { BrowserRouter,Routes,Route } from "react-router-dom";
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
  return (<>
    <BrowserRouter>
    <Navbar />
      <div class="container">
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/products/" element={<Products />}></Route>
              <Route path="/products/:id" element={<ProductDetails />}>
                <Route path="" element={<ProductDetailsInfo />}></Route>
                <Route path="prep" element={<ProductDetailsPrep />}></Route>
                <Route path="taste" element={<ProductDetailsTaste />}></Route>
              </Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  </>)
}

export default App;
 

