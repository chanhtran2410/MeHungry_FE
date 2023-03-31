import React from 'react'
import Table from "../../components/Table"
import "./Home.css"

const tableStatus = [[1,true], [2,true], [3,false], [4,false], [5,false], [6,true], [7,true], [8,false], [9,true], [10,true], [11,false], [12,true], [13,false], [14,false], [15,true], [16,false]]

const orderComponent = [["Dish1", 100000], ["Dish2", 100000], ["Dish3", 100000], ["Dish4", 100000], ["Dish5", 100000]]

const DishPrice = (props) => {
    return(
        <div className="bill">
            <h2 className="billTitle">{props.name}
                <h2 className="billPrice">${props.price}</h2>
            </h2>
        </div>
    )
}


//Main structure
const LeftBar = (props) =>{
  const tagSelect = "home"
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
        <div className="tableSelect">
            <h1>Tables</h1>
            {tableStatus.map((Tstatus) => {
                return <Table id={Tstatus[0]} free={Tstatus[1]}/>
            })}
        </div>
    )
}

const TableContent = (props) =>{
  
    return(
        <div className="tableContent">
            <h1>Table {props.tablenumber}</h1>
            Checkin time: 12:34:56
            <h1>Orders</h1>
            {orderComponent.map((dish) => {
                return <DishPrice className="billTitle" name={dish[0]} price={dish[1]}/>
            })}
            <DishPrice className="billTitle" name={"Tip"} price={10}/>
            <DishPrice className="billTitle" name={"Total"} price={500010}/>
            <button id="checkoutButton">Checkout</button>
        </div>
    )
}

const Home = () =>{
  
    return(
        <div className="home">
            <LeftBar resName="Restaurant Name"/>
            <TableContent tablenumber={1}/>
        </div>
    )
}

export default Home