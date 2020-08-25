import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

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
          Axios.post('http://localhost:5000/basket/remove',{
      itemname: remItemName,
    },
    {headers: {
      'x-auth-token': Cookies.get('token')
    }})
    .then(res=> {
        console.log(res.data);
        Cookies.set('basket', JSON.stringify(res.data.basket));
        console.log('Cookies Set', Cookies.get('basket'));
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
      },[userBasketSTR]);

  return(
    <>
    <div className="table-responsive">
    <div className="table-responsive">
    <table className="table table-responsive w-100 d-block d-md-table">
    
    <MDBTableHead  columns={columns}/>
    <MDBTableBody rows={rows}/>
    </table>
    </div>
    <Link to="/"><button className="cntshp">Continue Shopping</button></Link>
  <button className="cntshp">Empty Cart</button>
<div className="payment">
<h2 className="total">TOTAL</h2>
<h2 className="amt">Rs. {totalPayTemp}</h2>
<br />
<br />
<br />
<div className="hl1"></div>
<Link to='/checkout'><button className="checkout">CHECKOUT..</button></Link>
</div>
</div>
</>
  );
};

export default BasketTable;
