import {useOutletContext} from "react-router-dom";

const ProductDetailsPrep = () =>{
    const context = useOutletContext();
    
    return (
        <>
            <table class="table table-prep">
            <thead>
                <tr>
                <th>Preparation</th>
                <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Water Temperature:</td>
                <td>{context.Preparation.water}</td>
                </tr>
                <tr>
                <td>Leaf to Water Ratio:</td>
                <td>{context.Preparation.ratio}</td>
                </tr>
                <tr>
                <td>Steep Time:</td>
                <td>{context.Preparation.steep}</td>
                </tr>
            </tbody>
            </table>
        </>
    )
}

export default ProductDetailsPrep;