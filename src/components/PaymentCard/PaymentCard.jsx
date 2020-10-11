import React from 'react'
import './_PaymentCard.scss'

export default function PaymentCard(props) {

    return (
        <div className="payment-card">
            <div className="order-info">
                <label className="labels">TOTAL</label>
                <span className="labels-info">$ {props.price}</span>
                <label className="labels">Item</label>
                <span className="labels-info">{props.name}</span>
            </div>
            <div className="card-info">
                <label className="labels">EXPIRATION</label>
                <span className="labels-info">November, 29 2020</span>
                <label className="labels">CARD NUMBER</label>
                <input type="text" className="card-number-input" />
                <label className="labels">CVV</label>
                <input type="text" className="card-cvv-input" />
                <a href={`/otp`} className="submit-button">Get OTP</a>
            </div>
        </div>
    )
}
