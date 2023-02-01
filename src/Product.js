import Button from "./Button";
import {Link} from "react-router-dom"

const Product = (props) => {

    const {name,price,image,id} = props.details

    return (
        <>
        
        <div className="product">
            <div className="product-image-container">
                <Link to={`/products/${id}`}><img width="150"  className="product-image" alt={name} src={image}/></Link>
                <div className="product-quantity-container">
                <div className="product-quantity">0</div>
                </div>
            </div>
            <div className="product-info">
                <article>{name}</article>
                
            </div>
            <div className="product-checkout">
                <div>
                    <Button outline className="product-delete" onClick={props.onProductDelete}>x</Button>
                </div>
                <Button outline onClick={props.onProductAdd}>{`$${price}`}</Button>
            </div>
            
        </div>
        
        </>
        
    )
}

export default Product;