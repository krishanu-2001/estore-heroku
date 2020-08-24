
import React, { Component, useEffect } from 'react';
import { aliceblue } from 'color-name';
import {Switch, Route} from 'react-router-dom';
import Xnav from './xNav';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import Axios from 'axios';

const columns= [
  {
    label: '#',
    field: 'id',
    sort: 'asc'
  },
  {
    label: 'User ID',
    field: 'user-id',
    sort: 'asc'
  },
  {
    label: 'Username',
    field: 'username',
    sort: 'asc'
  },
  {
    label: 'Item',
    field: 'order',
    sort: 'asc'
  },
  {
    label: 'Quantity',
    field: 'order',
    sort: 'asc'
  }
  ,{
      label: 'Time-Stamp',
      field: 'timestamp',
      sort: 'asc'
  },
  {
    label: 'State',
    field: 'state',
    sort: 'asc'
  },
  {
      label: 'Delivered',
      field: 'Action',
      sort: 'asc'
  }
];




const AdminRequests = ()=>{

  const [rows, setRows] = React.useState([]);
  const [deliStatus, setDeliStatus] = React.useState(0);

  const deliverOrder = (orderID)=>{
    console.log('order delivered', orderID);
    Axios.post('http://localhost:5000/order/deliver',{
      orderID: orderID,
    })
    .then(res=> {
        console.log(res.data);
        setDeliStatus(Math.random());
    })
    .catch((err)=>{
      console.log(err);
  })
  } 

  useEffect(()=>{
    Axios.get('http://localhost:5000/order/')
    .then((res) => {
        console.log(res.data);
        let tempArr = [];

        res.data.forEach((element,index) => {
          let orderID = element._id;
          let order  = element.order;
          let listTemp1 = [];
          let listTemp2 = [];

          order.forEach((el)=>{
            listTemp1.push(
              <li>{el.itemname}</li>
            );
            listTemp2.push(
              <li>{el.quantity}</li>
            )
        })
          tempArr.push({
              'id': index+1,
              'itemname': element.user_id,
              'quantity': element.username,
          'price': <ol>{listTemp1}</ol>,
          'sub-total': <ul style={{listStyleType:"none"}}>{listTemp2}</ul>,
              'remove': element.createdAt,
              'state': element.state,
              'update': <button onClick={()=>deliverOrder(orderID)}>Delivered</button>,
          });
      });
      setRows(tempArr);
    });

  },[deliStatus]);
  return(
    <>
    <div >
                
                <div className="col-md-9" style={{backgroundColor:"#dddddd", height:"fit-content","margin-top":"0px",}}>
                    <div style={{"text-align":"center", "color":"#555555","margin-top":"0px","padding":"40px",}}>
                    <MDBTable responsiveSm>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows} />
    </MDBTable>
                    </div>
                </div>
            </div>  
    </>
  )
}

export default AdminRequests;