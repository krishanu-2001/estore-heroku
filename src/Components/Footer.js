import React, { useEffect } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import SignIn_Modal from './Sign_in_modal';
import SignUp_Modal from './Sign_up_modal';
import useWindowDimensions from '../Utilities/WindowDimension'
import './Comp-CSS/Footer.css';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import { scrollCat } from "./Item_body";
import Axios from 'axios';

var navTransi = true;
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


function Footer() {
    return(
        <>
<div>
<footer class="page-footer font-small cyan darken-3">

<div className="all">
  <div class="container-fluid text-center text-md-left">
    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h2 class="text-uppercase la">LA-Fresco</h2>
        <p className="la-p">We are committed to provide best services and always strive for better.</p>
        <p className="quote"><q>Being a good example is the best form of service</q></p>
      </div>

      <hr class="clearfix w-100 d-md-none pb-3"/>

      <div class="col-md-3 mb-md-0 mb-3">


        <h4 class="text-uppercase iit">About</h4>

        <ul class="list-unstyled iit">
          <li>
            <a href="http://www.iiti.ac.in" target='_' className="link">View Official Page</a>
          </li>
          <li>
            <Link to="/" ><span className="link">Admin Section</span></Link>
          </li>
          <li>
            <a href="http://iiti.ac.in/people/~cnsd2013/how_to_find_us_files/ms.html" className="link" target="_">Location</a>
          </li>
          <li>
            <Link to="/help"><span className="link">Help</span></Link>
          </li>
        </ul>

      </div>

      <div class="col-md-3 mb-md-0 mb-3 img">

      
        

        

      </div>

     

    </div>


  </div>


  <div className="container">

    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
        <a href="http://www.facebook.com/lokesh.singla.52" target="_" className="h"><i class="fa fa-facebook"> </i></a>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <a href="https://www.linkedin.com/in/lokesh-singla-83223a18b" target="_"><i class="fa fa-linkedin"> </i></a>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <a href="https://www.instagram.com/lokesh_singla0001/" target="_"><i class="fa fa-instagram"> </i></a>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
        <a href="https://www.youtube.com/watch?v=FqNqsZxHdY0&t=477s" target="_"><i class="fa fa-youtube"></i></a>
        </a>
      </li>
    </ul>


  </div>
  <br />



  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="http://www.iiti.ac.in" target='_' className="link"> IIT INDORE</a>
  </div>
</div>


</footer>

</div>

    
        </>
    );
}

export default Footer;