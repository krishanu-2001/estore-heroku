import React, { Component, useEffect } from 'react';
import { aliceblue } from 'color-name';
import {Switch, Route} from 'react-router-dom';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';

const columns= [
    {
      label: '#',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'Order ID',
      field: 'user-id',
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
        label: 'Collection Time',
        field: 'timestamp',
        sort: 'asc'
    },
    {
      label: 'Status',
      field: 'state',
      sort: 'asc'
    },
  ];

const MyOrders =  ()=>{
    const [rows, setRows] = React.useState([]);
    const [deliStatus, setDeliStatus] = React.useState(0);
  
  
    const setCollectionTime = (obj) =>{
      if(obj.getHours() < 10){
        obj.setHours(10);
        obj.setMinutes(0);
      }
      else if(obj.getHours() >= 18){
        if(obj.getHours() === 18 && obj.getMinutes()<=30){
          //pass
        }
        obj.setDate(obj.getDate()+1);
        obj.setHours(10);
        obj.setMinutes(0);
      }
      var obj2 = new Date(obj);
      obj2.setMinutes(obj2.getMinutes() + 30);
      return <div>
              {obj.getDate()+"-"+obj.getMonth()}<br />
              {obj.getHours() + ":" + obj.getMinutes() + "-"}
              {obj2.getHours() + ":" + obj2.getMinutes()}
      
            </div>;
    }
  
    useEffect(()=>{
      Axios.post('http://localhost:5000/order/myOrders',{
      },
      {headers: {
        'x-auth-token': Cookies.get('token')
      }})
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
            /*--- creating date object ---*/
            var obj = new Date(element.createdAt);
            tempArr.push({
                'id': index+1,
                'itemname': element._id,
            'price': <ul style={{listStyleType:"none"}}>{listTemp1}</ul>,
            'sub-total': <ul style={{listStyleType:"none"}}>{listTemp2}</ul>,
                'remove': setCollectionTime(obj),
                'state': element.state,
            });
        });
        setRows(tempArr);
      });
  
    },[deliStatus]);
    return(
      <>
     <div className="basket-container">
    <span className="basket-head">Your Orders</span>
    <hr style={{color: "black"}}/>
  <div className="basket-body">
  <div className="bt-table-div">
  <div className="table-responsive">
    <table className="table-responsive">
    
    <MDBTableHead  columns={columns}/>
    <MDBTableBody rows={rows}/>
    </table>
    </div>
  </div>
    </div><hr/>
    <div style={{display: 'flex', flexDirection: 'row', textDecoration: 'none', fontFamily: "'Alata', sans-serif",padding: '10px'}}>
    <div style={{width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none'}}>
    <Link to='/basket' className='basket-action' style={{textDecoration: 'none'}}>Back</Link>
    </div>
</div>
</div>
              </>
)
}

export default MyOrders;