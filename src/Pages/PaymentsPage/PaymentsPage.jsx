import React, { Component } from 'react'
import './_PaymentsPage.scss'
import PaymentCard from '../../components/PaymentCard/PaymentCard'


const axios = require('axios');

export default class PaymentsPage extends Component {

    constructor() {
        super();
        this.state = { price: "", name: "" };
    }

    componentDidMount() {
        axios.get('http://starlord.hackerearth.com/recipe')
            .then((response) => {
                const id = this.props.match.params.id
                const arr = response.data.filter((obj) => obj.id == id)
                this.setState({ price: arr[0].price, name: arr[0].name })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return (
            <div className="payments-container">
                <a href={`/`} className="back-arrow">{"<"}</a>
                <PaymentCard price={this.state.price} name={this.state.name}></PaymentCard>
            </div>
        )
    }
}
