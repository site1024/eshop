import {useOutletContext} from "react-router-dom";
import Button from "./Button"
const ProductDetailsInfo = () =>{
    const context = useOutletContext();
    
    return (
        <>
            <p>
            {context.name} sold at <strong>${context.price}</strong> per box.
            </p>
            <Button outline>${context.price}</Button>
        </>
    )
}

export default ProductDetailsInfo;