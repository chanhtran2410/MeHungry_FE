import React from "react"
import MealInfo from "../../components/MealInfo"
import Table from "../../components/Table"
import "./Menu.css"

const FoodList = [["Food1", "Description", "Available", "100000", "Img"], ["Food2", "Description", "Available", "200000", "Img"], ["Food3", "Description", "Unavailable", "150000", "Img"]]

const DrinkList = [["Drink1", "Description", "Available", "100000", "Img"], ["Drink2", "Description", "Available", "200000", "Img"], ["Drink3", "Description", "Unavailable", "150000", "Img"]]

//Main structure
const LeftBar = (props) =>{
  const tagSelect = "menu"
    return(
        <div className="leftBar">
            <h2 id="logo"></h2>
            <h1 id="resName">{props.resName}</h1>
            <button className="button" id="homebutt">Home</button>
            <button className="button" id="menubutt">Menu</button>
            {/* <button className="button" id="employeebutt">Employee</button> */}
            <TableSelect />
        </div>
    )
}

const TableSelect = () =>{
  
    return(
        <div className="menulist">
            <h1>Menu</h1>
            <ToggleBar/>
            
            {FoodList.map((meal) => {
                return <MealInfo name={meal[0]} description={meal[1]} status={meal[2]} price={meal[3]} img={meal[4]}/>
            })}
        </div>
    )
}

const ToggleBar = () => {
  return(
    <div>
      <button id="foodbtn">Food</button>
      <button id="drinkbtn">Drink</button>
      <button>+</button>
    </div>
  )
}

const Menu = () =>{
  
  return(
    <div className="menu">
        <LeftBar resName="Restaurant Name"/>
        <TableSelect/>
    </div>
)}

export default Menu