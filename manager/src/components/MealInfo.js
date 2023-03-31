import React, {useState, useEffect} from "react"
import "./MealInfo.css"


const MealInfo = (props) =>{
  
    return(
        <div id="mealinfo">
            <div id="mealimg"></div>
            <h1 id="mealname">{props.name}</h1>
            <h3 id="mealdes">{props.description}</h3>
            <h3 id="mealstat">{props.status}</h3>
            <h3 id="mealprice">${props.price}</h3>
            <button id="del"><img src="../img/trash.png"/></button>
            <button id="edit"><img src="../img/edit.png"/></button>
        </div>
    )
  }

export default MealInfo