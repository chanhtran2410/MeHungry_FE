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


const DishPrice = (props) => {
    return(
        <div className="bill">
            <h2 className="billTitle">{props.name}
                <h2 className="billQuan">x{props.quan}</h2>
                <h2 className="billPrice">${props.price}</h2>
            </h2>
        </div>
    )
}

const DishPrice2 = (props) => {
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
    const [dishList, setDishList] = useState([]);
    const [tip,setTip] = useState(0);
    const [changeC, setChangeC] = useState(true);

    // const [blinkC, setBlinkC] = useState("rgba(255, 200, 50, 0.7)");
    let blinkC = "rgba(255, 100, 50, 0.7)"

    let displayB = false;
    if (selection < 1) {displayB = false}
    else {displayB = true}

    // console.log("TabNum:", [props.tablenumber])
    const findDish = () => {
      // for (let i=0; i<orderList.length; i++)
      // {
      //   if (orderList[i][0] == selection ) {
      //   console.log(selection, "->", orderList[i])
      //   for (let j=1; j<orderList[i].length; j++)
      //   {
      //     dishList.push(orderList[i][j])
      //   }
      //   }
      // }
      // setDishList(orderList[selection-1])
      // console.log("Dishlist", selection, dishList)
    }

    const turnoff = () => {
      // tableStatus[selection-1][2] = false
    }

    const payrequest = () => {
      // setStatusDisplay(3)
      const config = {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user")).access_token,
        },
      }
      // console.log(config)
      fetch(`http://localhost:1500/api/view-payment/${selection}`, {
          method: "GET",
          headers: config.headers,
        })
          .then((response) => response.json())
          .then((tdata) => {
            // console.log("Tip: ",tdata.tip)
            setTip(tdata.tip)
          })
          .catch((error) => console.log(error))

    //DELETE LATER
      // fetch(`http://localhost:1500/api/request-checkout/${selection}`, {
      //   method: "POST",
      //   headers: config.headers,
      // })
      //   .then((response) => response.json())
      //   .then((tdata) => {
      //     // console.log("Tip: ",tdata.tip)
      //     // if (tdata.tip.type = "int") setTip(tdata.tip)
      //   })
      //   .catch((error) => console.log(error))
    }
    const checkout = () => {
      const config = {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user")).access_token,
        },
      }
      // console.log(config)
      fetch(`http://localhost:1500/api/finish-order/${selection}`, {
          method: "POST",
          headers: config.headers,
        })
          .then((response) => response.json())
        
          .then((tdata) => {
            // console.log(tdata)
          })
          .catch((error) => console.log(error))
      fetch(`http://localhost:1500/api/change-status/${selection}`, {
        method: "POST",
        headers: config.headers,
      })
        .then((response) => response.json())
      
        .then((tdata) => {
          // console.log(tdata)
        })
        .catch((error) => console.log(error))

      setSelection(0)
      setStatusDisplay(0)
    }

    const startServing = (() => {
      toggle(isToggled)
      setStatusDisplay(2)
      const config = {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user")).access_token,
        },
      }
      // console.log(config)
      fetch(`http://localhost:1500/api/change-status/${selection}`, {
          method: "POST",
          headers: config.headers,
        })
          .then((response) => response.json())
          .then((tdata) => {
            // console.log(tdata)
          })
          .catch((error) => console.log(error))
    });

    // const select = (props) => {
    //   setSelection(props.idn)
    //   toggle(free)
    // }

    const blinkColor = () => {
      
    }


/* USE EFFECT !!!!!!!!!!!!!!!!!! */
    useEffect(() => {
      const num=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
      
      setInterval(function () {
        if (blinkC == "rgba(255, 255, 255, 0.5)") {
          blinkC = ("rgba(255, 100, 50, 0.7)")
          // console.log("BLINK O")
          // setChangeC(!changeC)
        }
        else {blinkC = ("rgba(255, 255, 255, 0.5)")
        // console.log("BLINK W")
        // setChangeC(!changeC)
      }
      }, 1000);
      let config = {}
      if(localStorage.getItem("user")){
        config = {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("user")).access_token,
          },
        };}
        /*Run for the first time*/
        fetch(`http://localhost:1500/api/tables`, {
          method: "GET",
          headers: config.headers,
        })
          .then((response) => response.json())
        
          .then((tdata) => {
            // console.log(tdata)
            const newTabL = tdata.map((tdataEle) => {return [tdataEle.table_number, tdataEle.status]})
            // setTableList(newTabL)
            // console.log("OldTab:", newTabL)
              let temp3 = []
              for (let i=0; i<num.length; i++)
              {
                // let tempTabl = []
                for (let k=0; k<newTabL.length; k++)
                {
                if (newTabL[k][0] ==  num[i]) {
                  // console.log(selection, "->", newTabL[k])
                      // console.log("Num=", i, newTabL[k])
                      if (newTabL[k][1] == 0) {newTabL[k].push("white")}
                      else if (newTabL[k][1] == 1) {
                      newTabL[k].push(blinkC)
                      // setTimeout(function () {
                      //   newTabL[k][2] = "rgba(255, 255, 255, 0.5)"
                      // }, 2000);
                      }
                      else if (newTabL[k][1] == 2) {newTabL[k].push("rgba(255, 200, 50, 0.6)")}
                      else {newTabL[k].push("rgba(0, 255, 0, 0.5)")}
                      
                      temp3.push(newTabL[k])
                  }
                // else temp2.push([])
                }
                // temp3.push(tempTabl)
              }
              // console.log("NewTab:", temp3)
              setTableList(temp3)

              // setInterval(function () {
              //   let temT = tableList
              //   for (let k=0; k<temT.length; k++)
              //     {
              //     if (temT[k][1] ==  1) {
              //       temT[k][2] = "rgba(255, 255, 255, 0.5)"
              //       }
              //       // console.log("Nooooo: ",k , temT)
              //     }
              //   console.log("Nooooo: ", temT)
              //   setTableList(temT)
              //   // setTimeout(() => {}, 2000)
              // }, 2000);
          })
          .catch((error) => console.log(error))



        /*Run every next 5 sec*/
        setInterval(function () {
          fetch(`http://localhost:1500/api/tables`, {
          method: "GET",
          headers: config.headers,
        })
          .then((response) => response.json())
        
          .then((tdata) => {
            // console.log(tdata)
            const newTabL = tdata.map((tdataEle) => {return [tdataEle.table_number, tdataEle.status]})
            // setTableList(newTabL)
            // console.log("OldTab:", newTabL)
              let temp3 = []
              for (let i=0; i<num.length; i++)
              {
                // let tempTabl = []
                for (let k=0; k<newTabL.length; k++)
                {
                if (newTabL[k][0] ==  num[i]) {
                  // console.log(selection, "->", newTabL[k])
                      // console.log("Num=", i, newTabL[k])
                      if (newTabL[k][1] == 0) {newTabL[k].push("white")}
                      else if (newTabL[k][1] == 1) {
                      newTabL[k].push(blinkC)
                      // console.log("BlinkC: ", blinkC)
                      }
                      else if (newTabL[k][1] == 2) {newTabL[k].push("rgba(255, 200, 50, 0.6)")}
                      else {newTabL[k].push("rgba(0, 255, 0, 0.5)")}
                      
                      temp3.push(newTabL[k])
                  }
                // else temp2.push([])
                }
                // temp3.push(tempTabl)
              }
              // console.log("NewTab:", temp3)

              setTableList(temp3)
          })
          .catch((error) => console.log(error))


          
        
        // fetch(`http://localhost:1500/api/tables`, {
        //   method: "GET",
        //   headers: config.headers,
        // })
        //   .then((response) => response.json())
        
        //   .then((tdata) => {
        //     console.log(tdata)
        //     const newTabL = tdata.map((tdataEle) => {return [tdataEle.table_number, tdataEle.status]})
        //     setTableList(newTabL)
        //   })
        //   .catch((error) => console.log(error))
        
          // console.log("List: ", tableList)

          fetch(`http://localhost:1500/api/view-current-orders`, {
            method: "GET",
            headers: config.headers,
          })
            .then((response) => response.json())
            .then((odata) => {
              // console.log("Data: ", odata)
			  console.log(odata)
              const newOrdL = odata.map((odataEle) => {
                let temp = [odataEle.item_name, odataEle.price, odataEle.table_number, odataEle.quantity]
                let comOrdL = [temp[2]]
                // if (temp[0].length == 0) return [temp[2]]
                // else if (temp[0].length == 1) return [temp[2], [temp[0], temp[1]]]
                // console.log("Temp: ", temp)
              for (let i=0; i<temp[0].length; i++)
              {
                comOrdL.push([temp[0][i], temp[1][i], temp[3][i]])
              }
                // console.log("After loop: ", comOrdL)
                return comOrdL /*= [temp[2]] + comOrdL*/
              })
                // for (let i=0; i<newOrdL.length; i++)
                // {
                //   if (props.orderComponent[0] == props.tablenumber ) {
                //     for (let i=0; i<newOrdL.length; i++)
                //     {
                //       for (let j=1; j<newOrdL[i].length; j++)
                //       {
                //         dishList.push(newOrdL[i][j])
                //       }
                //     }
                //   }
                // }
      let temp2 = []
      for (let i=0; i<num.length; i++)
      {
        let tempTab = []
        for (let k=0; k<newOrdL.length; k++)
        {
        if (newOrdL[k][0] ==  num[i]) {
          // console.log(selection, "->", newOrdL[k])
            for (let j=1; j<newOrdL[k].length; j++)
            {
              tempTab.push(newOrdL[k][j])
            }
          }
        // else temp2.push([])
        }
        temp2.push(tempTab)
      }
      // setDishList(orderList[selection-1])
              setOrderList(temp2)
              // console.log("NewO: ", newOrdL)
              // console.log("NewerO: ", temp2)
            })
            .catch((error) => console.log(error))
          
//Take tip
  if (statusDisplay == 3) payrequest()




          }, 500);
            
            // console.log("OrderList: ", orderList)
        }
      , [/*toggle, setSelection*/]);
    // tableList
    return(
        <div className="tableSelect">
            <h1 className='title'>TABLES</h1>
            {tableList.map((Tstatus) => {
                return <Table idn={Tstatus[0]} free={Tstatus[1]} setSel={setSelection} setTog={toggle} setStat={setStatusDisplay} serve={startServing} checkout={checkout} color={Tstatus[2]}/>
            })}
            {(statusDisplay == 1 || statusDisplay == 2 || statusDisplay == 3) && <TableContent
              tablenumber={selection}
              setSel={setSelection}
              turnoff={turnoff}
              tog={isToggled}
              togf={toggle}
              startServing={startServing}
              payrequest={payrequest}
              checkout={checkout}
              paying={tableList[selection-1][1]}
              statusD={statusDisplay}
              orderComponent={orderList}
              dis={dishList}
              findDis={findDish}
              tip={tip}
              />}
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
    {props.orderComponent[(props.tablenumber-1)%16].map((dish) => {
      total = total + (dish[1]*dish[2])})
    if (props.statusD == 3)
    {total = total + props.tip
      }
    // else total.toFixed(2)
  }

    useEffect(() => {
      props.findDis()
  }, [])

    return(
        <div className="tableContent">
            <h1 id="tablelab">Table {props.tablenumber} </h1>
            <h3 className='stext'>Checkin time: 19:35:27</h3>
            <h1 id="orderlab">Order</h1>
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
          {(props.statusD == 2 || props.statusD == 3) && <div>
                {/* <ScrollArea> */}
                <div id="billContainer">
                  <div>
                {
                  // props.orderComponent[props.tablenumber%2]
                props.orderComponent[(props.tablenumber-1)%16].map((dish) => {
                    return <DishPrice className="bstextillTitle" name={dish[0]} price={dish[1]} quan={dish[2]}/>
                })}
                </div>
                </div>
                {/* </ScrollArea> */}
            <div className='billBottom'>
                {(props.statusD == 3) && (
                <div id="tiptext">
                    <DishPrice2 className="billTitle" name={"Tip"} price={props.tip}/>
                </div>
                  )}
                  {(props.statusD == 1 || props.statusD == 2 || props.statusD == 3) && (
                <div id="tiptext">
                    <hr/>
                    <DishPrice2 className="billTitle"  name={"Total"} price={total.toFixed(2)}/>
                </div>
                )}
            </div>
            {(props.statusD == 3) && (
            <div>
                <div id="checkoutContainer">
                    <button id="checkoutButton" onClick={props.checkout}>Checkout</button>
                </div>
            </div>)}
            </div>
            }
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
