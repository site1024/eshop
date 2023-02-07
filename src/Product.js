import Button from "./Button";
import {Link} from "react-router-dom"

const Product = (props) => {

    const {name,price,image,id} = props.details

    const productFromCart = props.cart.find(element => element.id===id);

    const sum = productFromCart? productFromCart.quantity:0;
  
    return (
        <> 
        <div className="product">
            <div className="product-image-container">
                <Link to={`/products/${id}`} aria-label={`Link to product details of ${name}`}><img width="150"  className="product-image" alt="" src={image}/></Link>
                <div className="product-quantity-container">
                {sum>0 && <div className="product-quantity">{sum? sum:0}</div>}
                </div>
            </div>
            <div className="product-info">
                <h2>{name}</h2>
                
            </div>
            <div className="product-checkout">
                <div>
                    {sum>0 &&<Button aria-label="Delete" outline className="product-delete" onClick={()=>props.onProductDelete(id)}>x</Button>}
                </div>
                <Button outline onClick={()=>props.onProductAdd(props.details)}>{`€${price}`}</Button>
            </div>
        </div>
        </>
        
    )
}

export default Product;