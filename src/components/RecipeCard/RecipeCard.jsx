import React from 'react';
import './_RecipeCard.scss'

export default function RecipeCard(props) {

    return (
        <a href={`/payment/${props.recipe.id}`} className="recipe-card-container">
            <div className="recipe-image-container">
                <img className="recipe-image" src={props.recipe.image} alt={props.recipe.name} />
            </div>
            <div className="recipe-info">
                <div className="recipe-heading">
                    <span className="recipe-title">{props.recipe.name}</span>
                    <span className="recipe-category">category: {props.recipe.category}</span>
                </div>
                <div className="recipe-description">
                    {props.recipe.description}
                </div>
            </div>
            <div className="recipe-footer">
                <span className="recipe-label">{
                    props.recipe.label ?
                        props.recipe.label
                        :
                        "No label present"
                }</span>
                <span className="recipe-price">$ {props.recipe.price}</span>
            </div>
        </a>
    )
}
