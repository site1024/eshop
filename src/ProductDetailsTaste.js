import {useOutletContext} from "react-router-dom";

const ProductDetailsTaste= () =>{
    const context = useOutletContext();
    return (
        <>
            <p>
            <strong>Tasting notes:</strong> {context.tasting}
            </p>
        </>
    )
}

export default ProductDetailsTaste;