import Button from "./Button";
import {Link} from "react-router-dom"
import Cart from "./Cart";

const Product = (props) => {

    const {name,price,image,id} = props.details

    let sum = 0;
    props.cart.filter(element => { if (element.id===id)
        {
        return sum = (element.quantity)
        } 
    })

    
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
                <article>{name}</article>
                
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