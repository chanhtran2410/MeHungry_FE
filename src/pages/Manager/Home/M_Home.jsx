import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import MainContent from '../../../components/MainContent/MainContent'
import Table from "./Table"
import {useState, useEffect} from 'react'
import "./M_Home.css"



const tableStatus = [[1,true, false], [2,true, false], [3,false, false], [4,false, false], [5,false,false], [6,true,false], [7,true,false], [8,false,false], [9,true, true], [10,true, true], [11,false, false], [12,true, false], [13,false,false], [14,false,false], [15,true,false], [16,false,false]]

const orderComponent = [[["Dish1", 100000], ["Dish2", 100000]],[["Dish3", 100000], ["Dish4", 100000], ["Dish5", 100000]]]

const tip = 10

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

const TableSelect = () =>{
    const [selection, setSelection] = useState(0);
    const [isToggled, toggle] = useState(false)
    let displayB = false;
    if (selection < 1) {displayB = false}
    else {displayB = true}
    const turnoff = () => {
      // tableStatus[selection-1][2] = false
    }

    const checkout = () => {
      setSelection(0)
    }

    // const select = (props) => {
    //   setSelection(props.idn)
    //   toggle(free)
    // }

    useEffect(() =>{
        // setSelection(0)
    }
    , []
    )

    return(
        <div className="tableSelect">
            <h1 id="mainTableLable">Tables</h1>
            {tableStatus.map((Tstatus) => {
                return <Table idn={Tstatus[0]} free={Tstatus[1]} paying={Tstatus[2]} setSel={setSelection}/>
            })}
            {displayB && <TableContent tablenumber={selection} turnoff={turnoff} tog={isToggled} togf={toggle} checkout={checkout} paying={tableStatus[selection][1]}/>}
        </div>
    )
}

const Toggle = ({ label, tog, togf, onClick, turnoff }) => {

    const callback = () => {
        togf(!tog)
        onClick(!tog)
        turnoff()
    }

    return (
        <label>
            <input type="checkbox" defaultChecked={tog} onClick={callback} />
            <span />
            <strong>{label}</strong>
        </label>
)}

const TableContent = (props) =>{

    const logState = state => {
        console.log("Toggled:", state)
        props.togf(!props.tog)
    }

    let total = 0
    orderComponent[props.tablenumber%2].map((dish) => {
        total = total + dish[1]})
    total = total + tip

    return(
        <div className="tableContent">
            <h1 id="tablelab">Table {props.tablenumber}</h1>
            <h3 className='stext'>Checkin time: 12:34:56</h3>
            <h1 id="orderlab">Orders</h1>
            <Toggle className="Togglebutton"
            label=""
            // toggled={props.tog}
            onClick={logState}
            turnoff={props.turnoff}
            tog={props.tog}
            togf={props.togf}
            />
          {props.tog && <div id="billContainer">
                {/* <ScrollView> */}
                {orderComponent[props.tablenumber%2].map((dish) => {
                    return <DishPrice className="billTitle" name={dish[0]} price={dish[1]}/>
                })}
                {/* </ScrollView> */}
            <DishPrice className="billTitle" name={"Tip"} price={tip}/>
            <div className="tipline"></div>
            <DishPrice className="billTitle" name={"Total"} price={total}/>
            <div id="checkoutContainer">
                <button id="checkoutButton" onClick={props.checkout}>Checkout</button>
            </div>
            </div>}
        </div>
    )
}

const M_Home = () => {
  return (
    <div className='M_home'>
      <Sidebar/>
      <MainContent>
      <TableSelect/>
      </MainContent>
    </div>
  )
}

export default M_Home
