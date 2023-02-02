import {useState} from "react";
import {loadStripe} from "@stripe/stripe-js";
import Button from "./Button";
import Input from "./Input";

const Cart = ({cart}) => {

    const [email,setEmail]=useState("");

    const stripLoadedPromise = loadStripe("pk_test_51MX87CF7khOHYmpkK7GcEQuoLflqX1OmVlci4wg9f88J1Wj0FLCOLeAVKojTGoUPlwnEhouQk3EFb92xUsgXdAd500OH9f8g1r")

    const buyItem = cart.map(element=>{
        return {price:element.price_id,
            quantity:element.quantity
        }})

    const handleFormSubmit = (event) => {
        event.preventDefault();
        stripLoadedPromise.then(stripe=>stripe.redirectToCheckout({
            lineItems: buyItem,
          mode: 'payment',
          customerEmail:email,
          successUrl: 'https://github.com/site1024/eshop',
          cancelUrl: 'https://github.com/site1024/eshop',
      })
      .then(response=>{
        console.log(response)
      })
      .catch(error=>console.log(error)))
    }

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
                    <th width="10%">Quantity</th>
                    <th width="15%">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(element=>{
                        return (<>
                            <tr>
                            <td>
                            <img width="40" alt={element.name} src={element.image}/>
                                {element.name}
                            </td>
                            <td>€{element.price}</td>
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
                    <th className="cart-highlight">€{sum}</th>
                    </tr>
                </tfoot>
                </table>}
            
            {cart.length>0 && <form className="pay-form" onSubmit={handleFormSubmit}>
                <p>
                    Enter your email and then click on pay and your products will be
                    delivered to you on the same day!
                </p>
                <Input autocomplete="email" placeholder="Email" type="email" onChange={event=>(setEmail(event.currentTarget.value))} required/>
                <p>
                <Button type="submit">Pay</Button>
                </p>
                </form>}


                    </div>
            </div>
    
    
    )


}

export default Cart;