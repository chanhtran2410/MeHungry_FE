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

/* API Stuff

const addItem = async () => {
    if(localStorage.getItem("user")){
      const config = {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
      };
    
    try {
      const data = {
        item_name: name,
        description:description,
        price:price,
        is_available: availability,
        category:category,
      };
      console.log(data);
      await axios.post("http://localhost:1500/api/add-item", data, config);
      message.success("Item added successfully");
    } catch (error) {
      console.error(error);
      message.error("Error adding item");
    }
  }
  };


  const config = {
    headers: {
      Authorization:
        "Bearer " +
        JSON.parse(localStorage.getItem("user")).access_token,
    },
  };

  useEffect(() => {
    fetch("http://localhost:1500/api/menu")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.log(error));
  }, []);
*/


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

    let displayB = false;
    if (selection < 1) {displayB = false}
    else {displayB = true}

    const turnoff = () => {
      // tableStatus[selection-1][2] = false
    }

    const checkout = () => {
      setSelection(0)
    }

    const startServing = (() => {

      const config = {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user")).access_token,
        },
      }
      console.log(config)
      axios.post(`http://localhost:1500/api/change-status/${selection}`, config.headers)
        .then((response) => {response.json()})
        .then((tdata) => {
          console.log(tdata)
          // const newTabL = tdata.map((tdataEle) => {return [tdataEle.table_number/*, tdataEle.status*/]})
          // setTableList(newTabL)
          // console.log(tableList)
        })
        .catch((error) => console.log(error))
    });

    // const select = (props) => {
    //   setSelection(props.idn)
    //   toggle(free)
    // }

    const [tableList, setTableList] = useState([]);
    useEffect(() => {
      // fetch(`http://localhost:1500/api/tables`, {
      //   method: "GET",
      //   headers: config.headers,
      // })


      // const config = {
      //   headers: {
      //     Authorization:
      //       "Bearer " +
      //       JSON.parse(localStorage.getItem("user")).access_token,
      //   },
      // }
      // axios.get(`http://localhost:1500/api/tables`, config.headers)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data)
      //     console.log("hello")
      //     // const newTabL = tdata.map((tdataEle) => {return [tdataEle.table_number/*, tdataEle.status*/]})
      //     // setTableList(newTabL)
      //     // console.log(tableList)
      //   })
      //   .catch((error) => console.log(error))


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
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log(error));
      }
    }, []);

    return(
        <div className="tableSelect">
            <h1 className='title'>TABLES</h1>
            {tableStatus.map((Tstatus) => {
                return <Table idn={Tstatus[0]} free={Tstatus[1]} setSel={setSelection} setTog={toggle} setStat={setStatusDisplay}/>
            })}
            {displayB && <TableContent tablenumber={selection} turnoff={turnoff} tog={isToggled} togf={toggle} checkout={checkout} paying={tableStatus[selection-1][1]} statusD={statusDisplay}/>}
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
            <input type="checkbox" defaultChecked={false} checked={tog} onClick={callback} />
            <span />
            <strong>{label}</strong>
        </label>
)}

const TableContent = (props) =>{

    // const logState = state => {
    //     console.log("Toggled:", state)
    //     // props.togf(!props.tog)
    // }

    let total = 0
    let tipD = (props.statusDisplay == 3)
    orderComponent[props.tablenumber%2].map((dish) => {
        total = total + dish[1]})
    total = total + tip
    // console.log(props.tog)
    // const checkoutF = (() => {
    //   // fetch(`http://localhost:1500/api/tables`, {
    //   //   method: "GET",
    //   //   headers: config.headers,
    //   // })
    //   axios.get(`http://localhost:1500/api/tables`, config.headers)
    //     .then((response) => response.json())
    //     .then((tdata) => {
    //       console.log(tdata)
    //       // const newTabL = tdata.map((tdataEle) => {return [tdataEle.table_number/*, tdataEle.status*/]})
    //       // setTableList(newTabL)
    //       // console.log(tableList)
    //     })
    //     .catch((error) => console.log(error))
    // });

    return(
        <div className="tableContent">
            <h1 id="tablelab">Table {props.tablenumber} </h1>
            <h3 className='stext'>Checkin time: 12:34:56</h3>
            <h1 id="orderlab">Orders</h1>
            <Toggle className="Togglebutton"
            label=""
            // toggled={props.tog}
            onClick={props.togf}
            turnoff={props.turnoff}
            tog={props.tog}
            togf={props.togf}
            />
          {props.tog && <div id="billContainer">
                {/* <ScrollArea> */}
                {orderComponent[props.tablenumber%2].map((dish) => {
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
