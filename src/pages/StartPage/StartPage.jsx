import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react';
import "./StartPage.css"

const NAME_STORAGE_KEY = "NAME";

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
      localStorage.setItem(NAME_STORAGE_KEY, JSON.stringify(textinput));
      settextinput("");
  },[textinput]);   

  return (
    <div className='holder'>
      <div className='form'>
        <form>
          <div>
            <label htmlFor="name">Your name:</label><br/>
            <input id='name' type="text" name = "name" placeholder  = "Please input your name" onChange={onTextInputChange}/>
          </div>
          <Link to="/home"><button type='submit' disabled={!textinput} onClick={onAddBtnClick}>Get Started</button></Link>
        </form>
      </div>
    </div>
  )
}


const StartPage = () => {
  return (
    <div>
      <BgImage />
      <Logo />
      <Form />
    </div>
  )
}

export default StartPage
