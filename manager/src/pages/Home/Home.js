import React from 'react'
// import Table from "../../components/Table"
import "./Home.css"
// import Sidebar from '../../components/Sidebar'
import MainContent from '../../components/MainContent'

// const M_Home = () => {
//   return (
//     <div>
//       <Sidebar/>
//       <MainContent>
//       Hello from manager Home
//       </MainContent>
//     </div>
//   )
// }

// export default M_Home

// const tableStatus = [[1,true, true], [2,true, true], [3,false, true], [4,false, true], [5,false,false], [6,true,false], [7,true,false], [8,false,false], [9,true, true], [10,true, true], [11,false, true], [12,true, true], [13,false,false], [14,false,false], [15,true,false], [16,false,false]]

// const orderComponent = [["Dish1", 100000], ["Dish2", 100000], ["Dish3", 100000], ["Dish4", 100000], ["Dish5", 100000]]

// const tip = 10

// const DishPrice = (props) => {
//     return(
//         <div className="bill">
//             <h2 className="billTitle">{props.name}
//                 <h2 className="billPrice">${props.price}</h2>
//             </h2>
//         </div>
//     )
// }


// //Main structure
// // const LeftBar = (props) =>{
// //   const tagSelect = "home"
// //     return(
// //         <div className="leftBar">
// //             <h2 id="logo"></h2>
// //             <h1 id="resName">{props.resName}</h1>
// //             <button className="button" id="homebutt">Home</button>
// //             <button className="button" id="menubutt">Menu</button>
// //             {/* <button className="button" id="employeebutt">Employee</button> */}
// //             <TableSelect />
// //         </div>
// //     )
// // }

// const TableSelect = () =>{
  
//     return(
//         <div className="tableSelect">
//             <h1>Tables</h1>
//             {tableStatus.map((Tstatus) => {
//                 return <Table id={Tstatus[0]} free={Tstatus[1]} paying={true}/>
//             })}
//             <TableContent tablenumber={1}/>
//         </div>
//     )
// }

// const Toggle = ({ label, toggled, onClick }) => {
//     const [isToggled, toggle] = useState(toggled)

//     const callback = () => {
//         toggle(!isToggled)
//         onClick(!isToggled)
//     }

//     return (
//         <label>
//             <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
//             <span />
//             <strong>{label}</strong>
//         </label>
// )}

// const TableContent = (props) =>{

//     const logState = state => {
//         console.log("Toggled:", state)
//     }

//     let total = 0
//     orderComponent.map((dish) => {
//         total = total + dish[1]})
//     total = total + tip

//     return(
//         <div className="tableContent">
//             <h1>Table {props.tablenumber}</h1>
//             Checkin time: 12:34:56
//             <h1>Orders</h1>
//             <Toggle className="Togglebutton"
//             label=""
//             toggled={true}
//             onClick={logState}
//             />
//             {orderComponent.map((dish) => {
//                 return <DishPrice className="billTitle" name={dish[0]} price={dish[1]}/>
//             })}
//             <DishPrice className="billTitle" name={"Tip"} price={tip}/>
//             <div className="tipline"></div>
//             <DishPrice className="billTitle" name={"Total"} price={total}/>
//             <button id="checkoutButton">Checkout</button>
//         </div>
//     )
// }

const Home = () =>{
    // return(
    //     <div className="leftBar">
    //         <h2 id="logo"></h2>
    //         <h1 id="resName">{props.resName}</h1>
    //         <button className="button" id="homebutt">Home</button>
    //         <button className="button" id="menubutt">Menu</button>
    //         {/* <button className="button" id="employeebutt">Employee</button> */}
    //         <TableSelect />
    //     </div>
    // )
    return (
        <div>
          {/* <Sidebar/> */}
          <MainContent>
          
          </MainContent>
        </div>
      )
    // return(
    //     <div className="home">
    //         <LeftBar resName="Restaurant Name"/>
    //     </div>
    // )
}

export default Home