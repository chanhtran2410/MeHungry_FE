// import React from 'react'
// import Sidebar from '../../../components/Sidebar/Sidebar'
// import MainContent from '../../../components/MainContent/MainContent'
// import { Input } from 'antd';
// import { InputNumber, Radio , Select } from 'antd';
// import { useState, useEffect } from 'react';
// import './Add.css'
// import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";

// /*=====Price value=====*/
// const onChange = (value) => {
//   console.log('changed', value);
// };

// /*=====Description===== */
// const { TextArea } = Input;

// /*=====Category=====*/
// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };



// const Edit = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);


//   /*=====Category=====*/
//   const [value, setValue] = useState('Available');
//   const onChange = ({ target: { value } }) => {
//     console.log('radio checked', value);
//     setValue(value);
//   };


//   useEffect(() => {
//     if (selectedImage) {
//       setImageUrl(URL.createObjectURL(selectedImage));
//     }
//   }, [selectedImage]);


//   return (
//     <div className='add'>
//       <Sidebar/>
//       <MainContent>
//       <h1 className='title'>MENU CUSTOM</h1>
//       <div className='add_info'>
//         <div className='basic'>
//           <label>Name</label><br/>
//           <Input placeholder="Name" id='name' />
//           <div className='flex-holder'>
//             <div>
//               <label>Price</label><br/>
//               <InputNumber
//                 defaultValue={1000}
//                 formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
//                 parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
//                 onChange={onChange}
//                 id='price'
//               />
//             </div>
//             <div>
//               <label>Category</label><br/>
//               <Select
//                 id='category'
//                 defaultValue="Food"
//                 style={{
//                   width: 120,
//                 }}
//                 onChange={handleChange}
//                 options={[
//                   {
//                     value: 'Food',
//                     label: 'Food',
//                   },
//                   {
//                     value: 'Drinks',
//                     label: 'Drinks',
//                   },
//                 ]}
//               />
//             </div>
//             <div className='avai'>
//               <label>Availability</label><br/>
//               <Radio.Group 
//               options={[
//                 {
//                   label: 'Available',
//                   value: 'Available',
//                 },
//                 {
//                   label: 'UnAvailable',
//                   value: 'UnAvailable',
//                 }]} 
//               onChange={onChange} 
//               value={value} 
//               optionType="button" />
//             </div>
//           </div>
//         </div>
//         <div className='img'>
//           <input
//             accept="image/*"
//             type="file"
//             id="select-image"
//             style={{ display: "none" }}
//             onChange={(e) => setSelectedImage(e.target.files[0])}
//           />
//           {imageUrl && selectedImage && (
//             <Box mt={2} textAlign="center">
//               <div>Image Preview:</div>
//               <img src={imageUrl} alt={selectedImage.name} height="100px" />
//             </Box>
//           )}
//           <label htmlFor="select-image">
//             <Button variant="contained" color="primary" component="span">
//               Upload Image
//             </Button>
//           </label>
//         </div>
//       </div>
//       <div className='add_description'>
//         <label>Description</label><br/>
//         <TextArea rows={4} placeholder="MaxLength is 120 characters" maxLength={120} />
//       </div>
//       <div className='button'>
//         <button id='Create'>Create</button>
//       </div>
//       </MainContent>
//     </div>
//   )
// }

// export default Edit



import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import MainContent from "../../../components/MainContent/MainContent";
import { InputNumber, Radio , Select, Input, message } from "antd";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import axios from "axios";
import "./Add.css";

const { TextArea } = Input;

const Edit = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("food");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState(true);

  const onPriceChange = (value) => {
    setPrice(value);
  };

  const onCategoryChange = (value) => {
    setCategory(value);
  };

  const onAvailabilityChange = ({ target: { value } }) => {
    setAvailability(value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const itemID = localStorage.getItem('itemID')

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const editItem = async () => {
    if(localStorage.getItem("user")){
      const config = {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
      };
    
    try {
      const data = {
        item_id: itemID,
        item_name: name,
        description:description,
        price:price,
        is_available: availability,
        category:category,
      };
      console.log(data);
      await axios.post("http://localhost:1500/api/update-item", data, config);
      message.success("Item added successfully");
    } catch (error) {
      console.error(error);
      message.error("Error editing item");
    }
  }
  };

  useEffect(() => {
    if(localStorage.getItem("user")){
      const config = {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
        },
      };
    axios.get(`http://localhost:1500/api/view-item/${itemID}`,config)
      .then((response) => {
        console.log(response.data);
        setName(response.data.item_name);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setAvailability(response.data.is_available ? true : false);
        setCategory(response.data.category);
        
      })
      .catch((error) => {
        console.log(error);
      });
    }


}, []);
        console.log(name);
        console.log(description);
        console.log(price);

        console.log(availability);
        console.log(category);

  return (
    <div className="add">
      <Sidebar />
      <MainContent>
        <h1 className="title">MENU CUSTOM</h1>
        <div className="add_info">
          <div className="basic">
            <label htmlFor="name">Name</label>
            <Input
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChangeName}
            />
            <div className="flex-holder">
              <div>
                <label htmlFor="price">Price</label>
                <InputNumber
                  defaultValue={1000}
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={onPriceChange}
                  id="price"
                  value={price}
                />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <Select
                  id="category"
                  value={category}
                  style={{
                    width: 120,
                  }}
                  onChange={onCategoryChange}
                  options={[
                    {
                      value: "food",
                      label: "Food",
                    },
                    {
                      value: "drink",
                      label: "Drinks",
                    },
                  ]}
                />
              </div>
              <div className="avai">
                <label htmlFor="availability">Availability</label>
                <Radio.Group
                  options={[
                    {
                      label: "Available",
                      value: true,
                    },
                    {
                      label: "UnAvailable",
                      value: false,
                    },
                  ]}
                  onChange={onAvailabilityChange}
                  value={availability}
                  optionType="button"
                />
              </div>
            </div>
          </div>
          <div className="img">
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
                <img
                  src={imageUrl}
                  alt={selectedImage.name}
                  height="100px"
                />
              </Box>
            )}
            <label htmlFor="select-image">
              <Button
                variant="contained"
                color="primary"
                component="span"
              >
                Upload Image
              </Button>
            </label>
          </div>
        </div>
        <div className="add_description">
          <label htmlFor="description">Description</label>
          <TextArea
            rows={4}
            placeholder="MaxLength is 120 characters"
            maxLength={120}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="button">
          <button id="Create" onClick={editItem}>
            Save
          </button>
        </div>
      </MainContent>
    </div>
  );
};

export default Edit;
