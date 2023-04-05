import React, {useState, useEffect} from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import MainContent from '../../../components/MainContent/MainContent'
import Table from "./Table"
import { Tabs } from 'antd';
import axios from 'axios';
// import {
//     StyleSheet,
//     Text,
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//   } from 'react-native';
import "./M_Home.css"



// const tableStatus = [[1,true, false], [2,true, false], [3,false, false], [4,false, false], [5,false,false], [6,true,false], [7,true,false], [8,false,false], [9,true, true], [10,true, true], [11,false, false], [12,true, false], [13,false,false], [14,false,false], [15,true,false], [16,false,false]]

const tableStatus = [[1, 0], [2, 0], [3, 2], [4, 3], [5, 2], [6, 3], [7, 0], [8, 2], [9, 0], [10, 2], [11, 3], [12, 3], [13, 1], [14, 2], [15, 0], [16, 2]]

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
    const [statusDisplay, setStatusDisplay] = useState(0)
    const [tableList, setTableList] = useState([]);
    const [orderList, setOrderList] = useState([]);

    let displayB = false;
    if (selection < 1) {displayB = false}
    else {displayB = true}

    const turnoff = () => {
      // tableStatus[selection-1][2] = false
    }

    const payrequest = () => {
      setStatusDisplay(3)
    }
    const checkout = () => {
      // const config = {
      //   headers: {
      //     Authorization:
      //       "Bearer " +
      //       JSON.parse(localStorage.getItem("user")).access_token,
      //   },
      // }
      // console.log(config)
      // fetch(`http://localhost:1500/api/change-status/${selection}`, {
      //     method: "POST",
      //     headers: config.headers,
      //   })
      //     .then((response) => response.json())
      //     // .then((data) => {
      //     //   console.log(data);
      //     // })
      //     // .catch((error) => console.log(error));
        
      //     .then((tdata) => {
      //       console.log(tdata)
      //     })
      //     .catch((error) => console.log(error))

      setSelection(0)
      setStatusDisplay(0)
    }

    const startServing = (() => {
      toggle(isToggled)
      setStatusDisplay(2)
      // const config = {
      //   headers: {
      //     Authorization:
      //       "Bearer " +
      //       JSON.parse(localStorage.getItem("user")).access_token,
      //   },
      // }
      // console.log(config)
      // fetch(`http://localhost:1500/api/change-status/${selection}`, {
      //     method: "POST",
      //     headers: config.headers,
      //   })
      //     .then((response) => response.json())
      //     .then((tdata) => {
      //       console.log(tdata)
      //     })
      //     .catch((error) => console.log(error))
    });

    // const select = (props) => {
    //   setSelection(props.idn)
    //   toggle(free)
    // }

    useEffect(() => {
      if(localStorage.getItem("user")){
        const config = {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("user")).access_token,
          },
        };
      
        fetch(`http://localhost:1500/api/tables`, {
          method: "GET",
          headers: config.headers,
        })
          .then((response) => response.json())
          // .then((data) => {
          //   console.log(data);
          // })
          // .catch((error) => console.log(error));
        
          .then((tdata) => {
            console.log(tdata)
            // const newTabL = tdata
            const newTabL = tdata.map((tdataEle) => {return [tdataEle.table_number, tdataEle.status]})
            setTableList(newTabL)
          })
          .catch((error) => console.log(error))
        
          console.log("List: ", tableList)

          // fetch(`http://localhost:1500/api/view-current-orders`, {
          //   method: "GET",
          //   headers: config.headers,
          // })
          //   .then((response) => response.json())
          //   .then((odata) => {
          //     console.log(odata)
          //     // const newTabL = tdata
          //     const newTabL = odata.map((odataEle) => {return [odataEle.item_name, odataEle.price]})
          //     setOrderList(newTabL)
          //   })
          //   .catch((error) => console.log(error))
          
          //   console.log("OrderList: ", orderList)
      }
    }, [toggle, setSelection]);
    // tableList
    return(
        <div className="tableSelect">
            <h1 className='title'>TABLES</h1>
            {tableList.map((Tstatus) => {
                return <Table idn={Tstatus[0]} free={Tstatus[1]} setSel={setSelection} setTog={toggle} setStat={setStatusDisplay}/>
            })}
            {displayB && <TableContent
              tablenumber={selection}
              turnoff={turnoff}
              tog={isToggled}
              togf={toggle}
              startServing={startServing}
              payrequest={payrequest}
              checkout={checkout}
              paying={tableList[selection-1][1]}
              statusD={statusDisplay}
              orderComponent={orderComponent}/>}
        </div>
    )
}

const Toggle = ({ label, tog, togf, onClick, turnoff, startServing, payrequest}) => {

    const callback = () => {
        if (tog == false) startServing()
        else payrequest()
        togf(!tog)
        onClick(!tog)
        turnoff()
    }

    return (
        <label>
            <input type="checkbox" defaultChecked={false} checked={tog} onClick={callback} />
            <span />
            <strong>{label}</strong>
        </label>
)}

const TableContent = (props) =>{
    
    let total = 0
    orderComponent[props.tablenumber%2].map((dish) => {
        total = total + dish[1]})
    total = total + tip

    return(
        <div className="tableContent">
            <h1 id="tablelab">Table {props.tablenumber} </h1>
            <h3 className='stext'>Checkin time: 19:35:27</h3>
            <h1 id="orderlab">Orders</h1>
            {(props.statusD == 1 || props.statusD == 2) &&
            <div>
              <Toggle className="Togglebutton"
              label=""
              // toggled={props.tog}
              onClick={props.togf}
              startServing={props.startServing}
              payrequest={props.payrequest}
              turnoff={props.turnoff}
              tog={props.tog}
              togf={props.togf}
              />
            </div>}
          {(props.statusD == 2 || props.statusD == 3) && <div id="billContainer">
                {/* <ScrollArea> */}
                {props.orderComponent[props.tablenumber%2].map((dish) => {
                    return <DishPrice className="bstextillTitle" name={dish[0]} price={dish[1]}/>
                })}
                {/* </ScrollArea> */}
            {(props.statusD == 3) && (
            <div>
                <DishPrice className="billTitle" name={"Tip"} price={tip}/>
                <hr/>
                <DishPrice className="billTitle" name={"Total"} price={total}/>
            
                <div id="checkoutContainer">
                    <button id="checkoutButton" onClick={props.checkout}>Checkout</button>
                </div>
            </div>)}
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
