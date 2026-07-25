// onChange = event handler used primarily with form elements
// ex. <input>, <textarea>, <select>, <radio>
// triggers a callback function every time the value of the input changes

import React,{useState} from 'react'



function MYCOMPONENT() {
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("Visa")
    const [shipping, setShipping] = useState("Delivery")

    function handlenamechange(event) {
        setName(event.target.value)
    }
    function handlequantitychange(event) {
        setQuantity(event.target.value)
    }
    function handlecommentchange(event) {
        setComment(event.target.value)
    }
    function handlepaymentchange(event) {
        setPayment(event.target.value)
    }
    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return(
        <div className="form-container">
            <h1>Food Order Form</h1>
            
            <div className="form-group">
                <label>Name:</label>
                <input value={name} onChange={handlenamechange} type="text"/>
                <p>Name: {name}</p>
            </div>
            <br/>

            <div className="form-group">
                <label>Quantity:</label>
                <input value={quantity} onChange={handlequantitychange} type='number'/>
                <p>Quantity: {quantity}</p>
            </div>
            <br/>

            <div className="form-group">
                <label>Delivery Instructions:</label>
                <textarea value={comment} onChange={handlecommentchange} placeholder='Enter Delivery Instructions'></textarea>
                <p>Comment: {comment}</p>
            </div>
            <br/>

            <div className="form-group">
                <label>Payment Method:</label>
                <select value={payment} onChange={handlepaymentchange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>
            </div>
            <br/>

            <div className="form-group">
                <label>Shipping Method:</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" value="Pick Up"
                               checked={shipping === "Pick Up"}
                               onChange={handleShippingChange}/>
                        Pick Up
                    </label>
                    <label>
                        <input type="radio" value="Delivery"
                               checked={shipping === "Delivery"}
                               onChange={handleShippingChange}/>
                        Delivery
                    </label>
                </div>
                <p>Shipping: {shipping}</p>
            </div>
            <br/>
        </div>
    )
}

export default MYCOMPONENT