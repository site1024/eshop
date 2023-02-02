const Cart = ({cart}) => {

    const sum = cart.reduce((total,current)=>total+((current.quantity)*(current.price)),0)

    return (
        <div classNameName="cart-layout">
            <div>
            <h1>Your Cart</h1>
            {cart.length===0 && <p>You have not added any product to your cart yet.</p>}
            {cart.length>0 && <table className="table table-cart">
                <thead>
                    <tr>
                    <th width="35%" className="th-product">Product</th>
                    <th width="10%">Unit price</th>
                    <th width="10%">Quanity</th>
                    <th width="15%">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(element=>{
                        console.log(element)
                        return (<>
                            <tr>
                            <td>
                            <img width="40" alt={element.name} src={element.image}/>
                                {element.name}
                            </td>
                            <td>${element.price}</td>
                            <td>{element.quantity} </td>
                            <td>
                                <strong>${element.price*element.quantity}</strong>
                                
                            </td>
                            </tr></>)
                    })}
                </tbody>
                <tfoot>
                    <tr>
                    <th colSpan="2"></th>
                    <th className="cart-highlight">Total</th>
                    <th className="cart-highlight">${sum}</th>
                    </tr>
                </tfoot>
                </table>}

                    </div>
            </div>
    )
}

export default Cart;