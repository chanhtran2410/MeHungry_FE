# MeHungry_FE
PSE project

<!-- Output copied to clipboard! -->

<!-- You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 3 -->

Here is a manual for the on-site ordering web-app for both manager and customer:

**Customer UI:**

_<span style="text-decoration:underline;">Home page:</span>_
<img src="captures/homepage.png" align="left" width=70 height=128 style='margin:0 2em;'>

The home page for customers consists of 3 buttons corresponding to 3 main functionalities which are view menu and order, request to checkout and call staff when needed.
<br/><br/><br/><br/><br/>


_<span style="text-decoration:underline;">Menu Page:</span>_

<img src="captures/menupage.png" align="right" width=70 height=128 style='margin:0 2em;'>
The menu page displays a list of food and drinks available for order. The items are categorized and include the name, price, and a short description. The customer can browse through the items and select the desired food and drinks and add it to their order. After finishing the order, the customer can again check it in the order page and customize it if needed.
<br/><br/>


_<span style="text-decoration:underline;">Ordering Page:</span>_
<img src="captures/orderpage.png" align="left" width=70 height=128 style='margin:0 2em;'>

The ordering page allows the customer to add items to their order. The customer can choose the quantity, customize the order and leave notes for chef. The customer can also remove items or cancel the order if needed. When they click the button “Order”, their order will be sent to the manager view for preparing and processing.
<br/><br/><br/>

_<span style="text-decoration:underline;">Checkout Page:</span>_

<img src="captures/checkoutpage.png" align="right" width=70 height=128 style='margin:0 2em;'>
The checkout page displays the summary of the order, including the name, quantity, and total cost of each item. The customer can review the order and choose a specific payment method before submitting it (if not, the payment method would be “Cash” in default). The customer can also leave a tip for good services. Finally, the customer confirms the order and proceeds to payment. The checkout request will be sent to the manager.
<br/><br/>

_<span style="text-decoration:underline;">Call Staff Page:</span>_
<img src="captures/requestpage.png" align="left" width=70 height=64 style='margin:0 2em;'>

The call staff page is a button that the customer can press to call a waiter or waitress for assistance.

**Manager UI:**
<br/>
_<span style="text-decoration:underline;">Login Page:</span>_

To be able to see the manager view, the user must log in using a granted account.
<br/><br/>
<img src="captures/loginpage.png" align="center" width=85% style='margin:0 2em;'>
<br/><br/>
_<span style="text-decoration:underline;">Home Page:</span>_

The home page displays the status and orders of each table. The manager can view the status of each table. There are 4 status “0, 1, 2, 3” corresponding to “free”, “request to open the table”, “ready to take order” and “request checkout”. 
<br/><br/>
<img src="captures/managerpage.png" align="center" width=85% style='margin:0 2em;'>


 \
White stands for the free tables. Yellow color is for the in–use tables, and Green is for the tables which requests a checkout. When a customer wants to open a table, that table in the manager screen will start blinking in order to inform. All the manager needs to do is open it using a toggle connected to each table.

_<span style="text-decoration:underline;">Menu Page:</span>_

The manager can also view the name, availability, price, and descriptions for each item. They are displayed in form of a bill for efficient visibility and billing.
<br/><br/>
<img src="captures/manager_menupage.png" align="center" width=85% style='margin:0 2em;'>
<br/><br/>
The menu page allows the manager to add, delete, or customize the items in the menu.  Changes made to the menu are reflected in the customer UI.
<br/><br/>
<img src="captures/manager_custompage.png" align="center" width=85% style='margin:0 2em;'>

<br/><br/>


**Tech-Stack:**

The web-app is built using the MERN stack, which stands for MongoDB, Express, React, and Node.js. 
<div style='display:flex'>
<img src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" align="center" width=150px style='margin:0 1em;'>
<img src="https://geekflare.com/wp-content/uploads/2023/01/expressjs.png" align="center" width=150px style='margin:0 1em;'>
<img src="https://www.cozumpark.com/wp-content/uploads/2022/12/react-nedir-react-ile-neler-yapilabilir-jpeg.webp" align="center" width=150px style='margin:0 1em;'>
<img src="https://caodang.fpt.edu.vn/wp-content/uploads/Thi%E1%BA%BFt-k%E1%BA%BF-ch%C6%B0a-c%C3%B3-t%C3%AAn-13.png" align="center" width=150px style='margin:0 1em;'>
</div>
<br/>

<b>MongoDB</b> is used as the database to store the menu items information, orders, table information, payment information of each table and the employee information list.

<b>Express</b> is used to handle the web-request and to connect to the database. 

<b>React</b> is used as the front-end framework to create the customer and manager UI. 

<b>Node</b> is used to run the server-side code and to communicate with the database.

**Installation instructions:**

1. Clone the repository from Github on your local machine. There are 2 separate repositories on github, one for backend, and another is for frontend.
```
FE: git clone https://github.com/chanhtran2410/MeHungry_FE.git
BE: git clone https://github.com/PSE-222/MeHungry.git
```

2. Install MongoDB and Node.js (if not already installed).

3. Go to the root directory of each project and run `npm install` to install the dependencies.
```
cd <root folder>
npm install
```

4. Create a .env file in the root directory and update it with the required credentials (e.g. database URI, secret key,...).

5. Run `npm start` to start the server.
```
npm start
```
6. Run `npm run dev` to run the UI.
```
npm run dev
```

6. The customer UI can be accessed on http://localhost:5173, while the manager UI can be accessed on http://localhost:5173/manager.

**User credentials:**

1. For the customer UI, customers can directly access the pages.

2. For the manager UI, they should first login with the provided granted credentials 

**Conclusion:**

With this on-site ordering web-app, customers can conveniently order food and drinks, and managers can efficiently manage the orders and menu items. The system is user-friendly and easy to navigate, and it makes the ordering process seamless and pleasant for everyone involved.
