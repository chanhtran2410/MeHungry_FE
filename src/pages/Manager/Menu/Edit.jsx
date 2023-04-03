import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import MainContent from '../../../components/MainContent/MainContent'
import { Input } from 'antd';
import { InputNumber, Radio , Select } from 'antd';
import { useState, useEffect } from 'react';
import './Add.css'
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

/*=====Price value=====*/
const onChange = (value) => {
  console.log('changed', value);
};

/*=====Description===== */
const { TextArea } = Input;

/*=====Category=====*/
const handleChange = (value) => {
  console.log(`selected ${value}`);
};



const Edit = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


  /*=====Category=====*/
  const [value, setValue] = useState('Available');
  const onChange = ({ target: { value } }) => {
    console.log('radio checked', value);
    setValue(value);
  };


  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);


  return (
    <div className='add'>
      <Sidebar/>
      <MainContent>
      <h1 className='title'>MENU CUSTOM</h1>
      <div className='add_info'>
        <div className='basic'>
          <label>Name</label><br/>
          <Input placeholder="Name" id='name' />
          <div className='flex-holder'>
            <div>
              <label>Price</label><br/>
              <InputNumber
                defaultValue={1000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
                id='price'
              />
            </div>
            <div>
              <label>Category</label><br/>
              <Select
                id='category'
                defaultValue="Food"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: 'Food',
                    label: 'Food',
                  },
                  {
                    value: 'Drinks',
                    label: 'Drinks',
                  },
                ]}
              />
            </div>
            <div className='avai'>
              <label>Availability</label><br/>
              <Radio.Group 
              options={[
                {
                  label: 'Available',
                  value: 'Available',
                },
                {
                  label: 'UnAvailable',
                  value: 'UnAvailable',
                }]} 
              onChange={onChange} 
              value={value} 
              optionType="button" />
            </div>
          </div>
        </div>
        <div className='img'>
          <input
            accept="image/*"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          {imageUrl && selectedImage && (
            <Box mt={2} textAlign="center">
              <div>Image Preview:</div>
              <img src={imageUrl} alt={selectedImage.name} height="100px" />
            </Box>
          )}
          <label htmlFor="select-image">
            <Button variant="contained" color="primary" component="span">
              Upload Image
            </Button>
          </label>
        </div>
      </div>
      <div className='add_description'>
        <label>Description</label><br/>
        <TextArea rows={4} placeholder="MaxLength is 120 characters" maxLength={120} />
      </div>
      <div className='button'>
        <button id='Create'>Create</button>
      </div>
      </MainContent>
    </div>
  )
}

export default Edit
