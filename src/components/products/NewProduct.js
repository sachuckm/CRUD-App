import React, { Component } from 'react';
import './NewProduct.css';
import logo from './../../images/logo.png';
import DatePicker from 'react-datepicker'

const newProduct= {
}
class NewProduct extends Component {
    constructor(props) {
      super(props);
      this.state = {
        code:'',
        product:'',
        stock:'',
        expiry_date:'',
      };
    }
    changecapture = (event) => {
      let st = this.state;
      st[event.target.name] =event.target.value
      this.setState(this.state=st)
      console.log('Change capture'+this.state);
      console.log('Change capture'+event.target.value);
      
    }
    render() {
        const image = (<img src={logo}></img>);
        const product = (
        <div className="productBox"> 
         <form className="productForm">
        
        <label className="basic">Basic</label>
        <label className="productName">Product name</label>
           <input className="productNameInput"  name="product" onChange={this.changecapture} type="text" value={this.props.code}/>
           <input className="productcode" name="code"  placeholder="Product Code" type="text" onChange={this.changecapture} value={this.props.product}/> 
            
           <label label className="Inventory">Inventory</label>
           <input className="ProductQty" name="stock"  placeholder="Quantity(Number)" type="text" onChange={this.changecapture} value={newProduct.stock}/> 
           <input className="ProductExpiry"  name="expiry_date" placeholder="Expiry Date" type="text" onChange={this.changecapture} value={this.props.expiry_date}/> 
            <input className="productSubmit" type="button" onClick = {( event ) => this.props.handleSubmitProduct(event, this.state)} value="Add Product" />
            <input className="cancelSubmit" type="button" value="Cancel" />
            
           
           </form>
       </div>);
      return (
        <div className="NewProduct">
        <div className = "headerproduct">
        {image}
        </div>
        {product}
        </div>
      );
    }
  }
  export default NewProduct;