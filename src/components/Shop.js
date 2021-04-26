import React, { Component } from 'react';
import {connect} from 'react-redux';
import {buyLaptop, buyMobile} from '../redux/actions';
import './style.css';
export class Shop extends Component {
 
  render() {
    return (
      <div>
        <h1 className="title">Welcome to Shop</h1>
        <div className="items">
        <div className="item">
          <p>Dell Inspiron Laptop</p>
          <p>Available: {this.props.numOfLaptops}</p>
          <button onClick={this.props.buyLaptop}>BUY</button>
        </div>
        <div className="item">
          <p>Iphone 10X</p>
          <p>Available: {this.props.numOfMobiles}</p>
          <button onClick={this.props.buyMobile}>BUY</button>
        </div>
        
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    numOfLaptops: state.laptops.numOfLaptops,
    numOfMobiles: state.mobiles.numOfMobiles,
    
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    buyLaptop: ()=> dispatch(buyLaptop()),
    buyMobile: ()=> dispatch(buyMobile()),
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop)
