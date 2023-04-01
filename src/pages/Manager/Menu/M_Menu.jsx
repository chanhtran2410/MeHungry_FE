import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import MainContent from '../../../components/MainContent/MainContent'
import { Tabs } from 'antd';
import Food from '../../../components/Dishes/Food';
import Drinks from '../../../components/Dishes/Drinks';

import './M_Menu.css'
import {GrAdd} from 'react-icons/gr'

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

const M_Menu = () => {
  return (
    <div className='M_menu'>
      <Sidebar/>
      <MainContent>
      <h1 className='title'>MENU</h1>
      <div className='tabs'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <GrAdd id='add'/>
      </div>
      </MainContent>
    </div>
  )
}

export default M_Menu
