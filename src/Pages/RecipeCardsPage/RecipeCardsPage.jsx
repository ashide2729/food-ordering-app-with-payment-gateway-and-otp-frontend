import React, { Component } from 'react'
import './_RecipeCardsPage.scss'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
const axios = require('axios');

export default class RecipeCardsPage extends Component {

    constructor() {
        super();
        this.state = { recipes: [] };
    }


    componentDidMount() {
        axios.get('http://starlord.hackerearth.com/recipe')
            .then((response) => {
                this.setState({ recipes: response.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return (
            <div className="recipes-container">
                {this.state.recipes.map((recipe) => (
                    <RecipeCard recipe={recipe}></RecipeCard>
                ))}
            </div>
        )
    }
}
