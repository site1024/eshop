import Product from "./Product";
import useFetch from "./useFetch";
import Loader from "./Loader";
import { useState,useEffect } from "react";

const Products = (props) => {

    const [products,setProduct] = useState([]);
    const {get , loader} = useFetch("https://eshopdemo12-default-rtdb.firebaseio.com/")

    useEffect (()=>{
        get("teaproduct.json")
        .then(data => setProduct(data))
        .catch((error) => console.log("Could not load products", error))}
        ,[])
  
    return (
        <div className="products-layout">
            <h1>Products</h1>
            <p>Take a look at our products</p>
            
            <div class="products-grid">
                {loader && <Loader/>}
                {products && products.map(product=> <Product key={product.id} details={product} onProductAdd={props.onProductAdd} onProductDelete={props.onProductDelete}/>)}
            </div>
        </div>
        
    )
}

export default Products;