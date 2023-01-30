import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Cart from "./Cart";
import Navbar from "./Navbar"

const App = () => {
  return (<>
    <BrowserRouter>
    <Navbar />
      <div class="container">
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  </>)
}

export default App;
