import React from 'react'
import "./Guest.css"
import { Tabs } from 'antd';
import Food from '../../components/Dishes/Food';
import Drinks from '../../components/Dishes/Drinks';


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
 
const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `Food`,
      children: <Food />,
    },
    {
      key: '2',
      label: `Drinks`,
      children: <Drinks />,
    },
  ];


const Guest = () => {
  return (
    <div className='guest'>
      <BgImage />
      <Logo />
      <div className='menu-tabs'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}

export default Guest
