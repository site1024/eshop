import {useOutletContext} from "react-router-dom";
import Button from "./Button"
const ProductDetailsInfo = (props) =>{
    const context = useOutletContext();
    
    return (
        <>
            <p>
            {context.name} sold at <strong>${context.price}</strong> per box.
            </p>
            <Button outline onClick={()=> props.onProductAdd(context)}>€{context.price}</Button>
        </>
    )
}

export default ProductDetailsInfo;  