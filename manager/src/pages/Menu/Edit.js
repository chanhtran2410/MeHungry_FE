import React, {useState, useEffect} from "react"
import Field from "../../components/Field"
import "./Edit.css"

const FoodList = [["Food1", "Description", "Available", "100000", "Img"], ["Food2", "Description", "Available", "200000", "Img"], ["Food3", "Description", "Unavailable", "150000", "Img"]]

const DrinkList = [["Drink1", "Description", "Available", "100000", "Img"], ["Drink2", "Description", "Available", "200000", "Img"], ["Drink3", "Description", "Unavailable", "150000", "Img"]]

//Main structure
const LeftBar = (props) =>{
    return(
        <div className="leftBar">
            <h2 id="logo"></h2>
            <h1 id="resName">{props.resName}</h1>
            <button className="button" id="homebutt">Home</button>
            <button className="button" id="menubutt">Menu</button>
            {/* <button className="button" id="employeebutt">Employee</button> */}
        </div>
    )
}

const Reader = () => {
    return(
        <div className="menuFrame">
            <Field id="namesheet" pretext="Name" w={500} h={50}/>
            <Field id="pricesheet" pretext="Price" w={300} h={50}/>
            <Field id="dessheet" pretext="Description" w={800} h={100}/>
            <div id="mealimg"></div>
            <button className="uploadButton" id="upload">Upload</button>
            <button className="uploadButton" id="create">Save</button>
            <button className="uploadButton" id="cancel">Cancel</button>
        </div>
    )
}

const FillSheet = (props) =>{
  const [mealname, setMealname] = useState("New ")


    return(
        <div className="menuFrame">
            <h1 id="lable">{props.pretext}</h1>
            <input id="readname" type="text" value={mealname + props.pretext}></input>
        </div>
    )
}

const Edit = () =>{
  
  return(
    <div className="menu">
        <LeftBar resName="Restaurant Name"/>
        <Reader />
    </div>
)}

export default Edit