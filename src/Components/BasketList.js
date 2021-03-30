import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

var totalPayTemp = 0;
var bas=[];

const BasketTable = (props) => {

    var basArray = [];
    const history = useHistory();

    const columns= [
        {
          label: '#',
          field: 'id',
          sort: 'asc'
        },
        {
          label: 'Item-Name',
          field: 'itemname',
          sort: 'asc'
        },
        {
          label: 'Quantity',
          field: 'last',
          sort: 'asc'
        },
        {
          label: 'Price',
          field: 'Price',
          sort: 'asc'
        },
        {
            label: 'Sub-Total',
            field: 'Sub-Total',
            sort: 'asc'
        },
        {
            label: 'Remove',
            field: 'Action',
            sort: 'asc'
        }
      ];

      const [rows, setRows] = React.useState([
        {
          'id': 1,
          'first': <MDBBtn color="danger">Button</MDBBtn>,
          'last': 'Otto',
          'handle': '@mdo'
        },
        {
          'id': 2,
          'first': 'Jacob',
          'last': <MDBBtn color="danger">Button</MDBBtn>,
          'handle': '@fat'
        },
        {
          'id': 3,
          'first': 'Larry',
          'last': 'the Bird',
          'handle': <MDBBtn color="danger">Button</MDBBtn>
        }
      ])

      const [userBasketSTR, setUBSTR] = React.useState(Cookies.get('basket'));

      const removeItem = (remItemName)=>{
     //   userBasket.map(curr=>{

          console.log('Remove Button pressed', remItemName);
          Axios.post('https://mernstackestore.herokuapp.com/basket/remove',{
      itemname: remItemName,
    },
    {headers: {
      'x-auth-token': Cookies.get('token')
    }})
    .then(res=> {
        console.log(res.data);
        Cookies.set('basket', JSON.stringify(res.data.basket));
        console.log('Cookies Set', Cookies.get('basket'));
        store.addNotification({
          title: 'Done !',
          message: "Item removed from Cart",
          type: 'success',                         // 'default', 'success', 'info', 'warning'
          insert: "top",
          container: 'top-right',                // where to position the notifications
          animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
          animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
          dismiss: {
            duration: 5000,
            onScreen: true,
            pauseOnHover: true
          }
        })
        props.action();
        setUBSTR(Cookies.get('basket'));
        
    //    window.location.reload(false);
    })
    .catch((err)=>{
      console.log(err);
  })
//})
//window.location.reload(false);

      }
  
      useEffect(()=>{
        console.log('use effect ran');
        setUBSTR(Cookies.get('basket'));
          const userBasket = JSON.parse(userBasketSTR);

          var holder = {};

          userBasket.forEach(function(element) {
            if (holder.hasOwnProperty(element.itemname)) {
              holder[element.itemname] = parseInt(holder[element.itemname]) + parseInt(element.quantity);
          
            } else {
              holder[element.itemname] = element.quantity;
            }
          });

          let map= new Map();
      userBasket.map(element=>{
        map.set(element.itemname,element.price);
      });

      var obj2 = [];
        
        for (var prop in holder) {
          obj2.push({ itemname: prop, quantity: holder[prop], price: map.get(prop)});
        }
        
        console.log(obj2.length);
        console.log(obj2);         

         
          obj2.forEach((element,index) => {
              let remItemName = element.itemname;
              basArray.push({
                  'id': index+1,
                  'itemname': element.itemname,
                  'quantity': element.quantity,
                  'price': element.price,
                  'sub-total': element.price*element.quantity,
                  'remove': <button onClick={()=>removeItem(remItemName)}>Remove</button>
              })
            //  totalPayTemp+=element.price+element.quantity;
          })
          bas=obj2;
        setRows(basArray);
      },[userBasketSTR, props.lolProp]);

  return(
    <>
    <div className="table-responsive">
    <table className="table-responsive">
    
    <MDBTableHead  columns={columns}/>
    <MDBTableBody rows={rows}/>
    </table>
    </div>
    
</>
  );
};

export default BasketTable;
