
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import './billboards.css'
import { Product_01, Product_02, Product_03, Product_04, Product_05, Product_06, Product_07, Product_08 } from '../../../imagepath';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Button } from '@material-ui/core';
import CollapsibleTable from './components/summaryComp';
import './summary.css';
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

class summary extends Component {
  constructor(){
    super();
    this.state={
      price: null,
      productPrice: 1050
    }
  }
  render() {
    return (
      <div className="page-wrapper">
        <Helmet>
          <title>Adspace Summary</title>
          <meta name="description" content="Dashboard" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Summary</h3>
                <ul className="breadcrumb">
                  <div className="crumb">
                  <li className="breadcrumb-item"><a href="/app/index">Dashboard</a></li>
                  <li className="breadcrumb-item active">Summary</li>
                  </div>
                 

                  <div>
    {/* <Button href="/app/ecommerce/summary"  variant="contained" color="primary" style={{margin:"10px", color:"white"}} >CONTINUE ${`${this.state.price?this.state.price:0}`} </Button> */}
                  </div>
                </ul>
              </div>
            </div>
             
          </div>
          {/* /Page Content */}
         

          <CollapsibleTable/>
          <input className="i" style={{margin:"20px" }}  type="text" value="" placeholder="CAMPAIGN / PRODUCT TITLE" /> <br/>
          <div className="foot"> 
          <div className="start">
          <Button variant="contained" color="primary" >Export your plan</Button> <span>  </span>
          <Button variant="contained" color="primary">Save this plan</Button>
          </div>
          <div className="mid">
          <Button variant="contained" color="primary" disabled>Pay $15,223 with paystack</Button>
          </div>

          <div className="end">
          <Button style={{marginBottom:"5px"}} variant="contained" color="primary" >Pay with cheque/bank transfer</Button> <br/>
          <Button variant="contained" color="primary" >Back</Button>
          </div>
          
          </div>
         
        </div>
      </div>
    );
  }
}

export default summary;