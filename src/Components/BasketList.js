import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';



const BasketTable = (props) => {

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

      const removeItem = (remItemName)=>{
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
        history.push('/basket');
        
    })
    .catch((err)=>{
      console.log(err);
  })
      }
  
      useEffect(()=>{
          const userBasketSTR = Cookies.get('basket');
          const userBasket = JSON.parse(userBasketSTR);
          var basArray = [];
          userBasket.forEach((element,index) => {
              let remItemName = element.itemname;
              basArray.push({
                  'id': index,
                  'itemname': element.itemname,
                  'quantity': element.quantity,
                  'price': element.price,
                  'sub-total': element.price*element.quantity,
                  'remove': <button onClick={()=>removeItem(remItemName)}>Remove</button>
              })
          })
        setRows(basArray);
      },[])//ComponentdidMount

  return(
    <MDBTable responsiveSm>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows} />
    </MDBTable>
  );
};

export default BasketTable;