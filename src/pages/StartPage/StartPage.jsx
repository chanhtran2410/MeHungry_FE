// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState, useCallback } from 'react';
// import "./StartPage.css"

// const NAME_STORAGE_KEY = "NAME";

// const Logo = () => {
//   return (
//     <div className="logo">
//       <img src="https://www.digitalmomblog.com/wp-content/uploads/2022/08/cookie-monster-hungry-meme.jpg" alt="Logo"/>
//       <h4><b>Restaurent's name</b></h4>
//     </div>
//   );
// };

// const BgImage = () => {
//   return (
//     <div className="bgimg">
//       <img src="https://www.digitalmomblog.com/wp-content/uploads/2022/08/cookie-monster-hungry-meme.jpg" alt="Logo"/>
//     </div>
//   );
// };

// const Form = () =>{
//   const [textinput, settextinput] = useState("");
//   const onTextInputChange = useCallback((e) => {
//     settextinput(e.target.value);
//   },[]);

//   const onAddBtnClick = useCallback((e) => {
//       localStorage.setItem(NAME_STORAGE_KEY, JSON.stringify(textinput));
//       settextinput("");
//   },[textinput]);   

//   return (
//     <div className='holder'>
//       <div className='form'>
//         <form>
//           <div>
//             <label htmlFor="name">Your name:</label><br/>
//             <input id='name' type="text" name = "name" placeholder  = "Please input your name" onChange={onTextInputChange}/>
//           </div>
//           <Link to="/home"><button type='submit' disabled={!textinput} onClick={onAddBtnClick}>Get Started</button></Link>
//         </form>
//       </div>
//     </div>
//   )
// }


// const StartPage = () => {
//   return (
//     <div className='startpage'>
//       <BgImage />
//       <Logo />
//       <Form />
//     </div>
//   )
// }

// export default StartPage




import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useState, useCallback } from 'react';
import axios from 'axios';
import "./StartPage.css"

const Logo = () => {
  return (
    <div className="logo">
      <img src="https://www.digitalmomblog.com/wp-content/uploads/2022/08/cookie-monster-hungry-meme.jpg" alt="Logo"/>
      <h4><b>Restaurent's name</b></h4>
    </div>
  );
};

const BgImage = () => {
  return (
    <div className="bgimg">
      <img src="https://www.digitalmomblog.com/wp-content/uploads/2022/08/cookie-monster-hungry-meme.jpg" alt="Logo"/>
    </div>
  );
};

const Form = () =>{
  const [textinput, settextinput] = useState("");
  const onTextInputChange = useCallback((e) => {
    settextinput(e.target.value);
  },[]);

  const onAddBtnClick = useCallback((e) => {
      localStorage.setItem("Customer_name",JSON.stringify(textinput));
      settextinput("");
      if(localStorage.getItem('Table_number') && localStorage.getItem('Customer_name')){
        const table_number = localStorage.getItem('Table_number');
        try {
          axios.post(`http://localhost:1500/api/assign-table/${table_number}/${textinput}`);
        } catch (error) {
          console.error(error);
        }
      }  
  },[textinput]);   

  return (
    <div className='holder'>
      <div className='form'>
        <form>
          <div>
            <label htmlFor="name">Your name:</label><br/>
            <input id='name' type="text" name = "name" placeholder  = "Please input your name" onChange={onTextInputChange}/>
          </div>
          <Link to='/home'><button type='submit' disabled={!textinput} onClick={onAddBtnClick}>Get Started</button></Link>
        </form>
      </div>
    </div>
  )
}

// const StartPage = () => {
//   useEffect(() => {
//     const tableId = localStorage.getItem("tableID");
//     axios.post(`http://localhost:1500/api/request-table/${tableId}`)
//       .then((response) => {
//         console.log(response.data);
//         localStorage.setItem('Table_number',response.data.table_number)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className='startpage'>
//       <BgImage />
//       <Logo />
//       <Form />
//     </div>
//   )
// };
const StartPage = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const tableId = localStorage.getItem("tableID");
      axios.post(`http://localhost:1500/api/request-table/${tableId}`)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('Table_number',response.data.table_number)
          console.log(response.data.status)
          if(response.data.status === 1){
            clearInterval(interval);
            window.location.href = "/home"
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='startpage'>
      <BgImage />
      <Logo />
      <Form />
    </div>
  )
};


export default StartPage
