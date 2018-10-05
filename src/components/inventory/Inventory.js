import React, { Component } from 'react';
import './../login/Login.css';
import './inventory.css';
import ListItem from './../listItem/ListItem'
import NewProduct from './../products/NewProduct';
import logo from './../../images/logo.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import omit from 'lodash/omit';
import {ToastContainer, ToastStore} from 'react-toasts';

import {postMethod, deletMethod, getAllProducts} from './../../actions/useractions';
const header = <div >
<p type="text" name="code" value = "Code" className="listCodeheader">CODE</p>
<p type="text" name="product" value = "Product" className="listProductheader">PRODUCT</p>
<p type="text" name="stock" value = "Stock" className="listStockheader">STOCK</p>
<p type="text" name="expiry_date" value = '' className="listExpDateheader">EXPIRY DATE</p>
<p type="text" name="actions" value = '' className="listActionheader">ACTIONS</p>
</div>
 const image = (<img className ="logoImage" src={logo}></img>);
class Inventory extends Component {
    constructor(props) {
      super(props);
      this.state = {addProduct:false,
          products:[
              /*{
                id:0,
                code:1,
                product:'Really awesome apples',
                stock:35,
                expiry_date:'3rd march',
                action:''
          },
          {
            id:1,
            code:2,
            product:'Really awesome apples',
            stock:35,
            expiry_date:'3rd march',
            action:''
      },
      {
        id:2,
        code:3,
        product:'Really awesome apples',
        stock:35,
        expiry_date:'3rd march',
        action:''
  },{
    id:3,
    code:4,
    product:'Really awesome apples',
    stock:35,
    expiry_date:'3rd march',
    action:''
},{
    id:4,
    code:5,
    product:'Really awesome apples',
    stock:35,
    expiry_date:'3rd march',
    action:''
},{
    id:5,
    code:6,
    product:'Really awesome apples',
    stock:35,
    expiry_date:'3rd march',
    action:''
},{
    id:6,
    code:7,
    product:'Really awesome apples',
    stock:35,
    expiry_date:'3rd march',
    action:''
},{
    id:7,
    code:8,
    product:'Really awesome apples',
    stock:35,
    expiry_date:'3rd march',
    action:''
},{
    id:8,
    code:1,
    product:'Really awesome apples',
    stock:35,
    expiry_date:'3rd march',
    action:''
}*/]
      };
    }
    shouldComponentUpdate (nextProps, nextState) {
        return true// this.props.message != nextProps.message
    }
    onDeleteClick =  (e, selectedItem) => {
        if (this.props.products.length === 1) {
            this.setState(this.props.products = [])
        } else {
            this.setState(this.props.products.splice(this.props.products.findIndex(item => item._id===selectedItem._id), 1))
        }
        console.log(this.props.products)
    this.props.deletMethod(selectedItem)
    }
    
    onChangeClick = (event, selectedItem) => {
        selectedItem.action = event.target.value !== 'save'? true:false
       this.setState(this.props.products[this.props.products.findIndex(item => item._id===selectedItem._id)] = selectedItem)
    if (event.target.value === 'save') {
        this.props.postMethod(selectedItem, () => {
            ToastStore.success("Product updated successfully")
        }, () => {
            ToastStore.error("Update Failed");
        })
    }
    }
    handleSubmitProduct =(event, product) => {
       
        console.log(newProduct)
        let newProduct = product
        newProduct._id = this.props.products.length;
        newProduct.action = ''
        let pro = this.props.products
        pro.push(newProduct)
        
        //var data = new FormData();
        //data.append( "json", JSON.stringify( {'code':"code33"} ) );
        /*fetch('http://localhost:3002/products', {
            method:'POST',
            bodyUsed:true,
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
              }
            
        }).then((data) => {
            if(data.status === 200) {
                this.setState({ products : pro})
                console.log(this.props.products)
                this.setState({addProduct: false});
            } else {
                alert(data.statusText)
            }
//console.log('!!!!!!!!!!!!!!!!!!data))))))))))))))))'+JSON.stringify(data));
        }).catch((e)=>{
            alert('adding new record'+e)
//console.log('############################ERROR###########'+e);
        })*/
        //this.props.postMethod();
        this.props.postMethod(omit(product, ['_id']), () => {
             this.setState( { addProduct: false }); 
             ToastStore.success("Product added successfully")
            }, () => {
            ToastStore.error("Update Failed");
        })

       // this.setState({addProduct: false});
    }
   
    handleChange = (e,item, selectedItem)=>{
        console.log(this.props.products)
        console.log('event'+this.props.products[this.props.products.findIndex(item => item._id===selectedItem._id)][e.target.name])
        let obj = this.props.products[this.props.products.findIndex(item => item._id===selectedItem._id)]
        obj[e.target.name] = e.target.value
        console.log(obj)
       this.setState(this.props.products[this.props.products.findIndex(item => item._id===selectedItem._id)] = obj)
        
    }
    onproduct () {
        this.setState({addProduct: true});
    }
    componentDidMount() {
        console.log('componentDidMount')
       /* fetch('http://localhost:3002/products').then((data) => data.json()).then(res => {
//console.log('##########################'+res)
    this.setState(this.props.products = res.result)

        })
        .catch((e)=>{
//console.log('############################ERROR###########'+e);
        })*/
this.props.getAllProducts();
    }

    componentWillMount() {
  //      console.log('componentWillMount')
        
    }
    
    render() {
        let showPage = null;
        if (this.state.addProduct  ) {
            showPage = <NewProduct
            handleSubmitProduct ={this.handleSubmitProduct}
            ></NewProduct>
        } else {
            <div className= "listTableHeader">{header}</div>
            
            let listItem =  this.props.products && this.props.products.map((product) =>
        <ListItem 
            changedClicked={this.onChangeClick}
            handleChange={this.handleChange}
            deleteClicked = {this.onDeleteClick}

             key={product._id}>
            { product }
        </ListItem>);
        showPage = <div> 
            <div className ="tab">
            <div >{image}</div>
            </div>
            <span className="headerInventory">Inventory management</span>
        <div className="listBorder">
            <div className= "listTableHeader">{header}</div>
                        <div className="listTable">{listItem}</div>
                        </div>
                        <ToastContainer store={ToastStore}/>
                        </div>
        }
  
      return (
        <div className="inventory">
        
         <button className="newProduct" onClick={() => { this.setState( { addProduct: true })}}>New Product </button>
         
         <div>
         {showPage}
         </div>
        
        </div>
       
      );
    }
  }

  const mapStateToProps = (state) => {

    return {
     //message:state.userReducer.data.message,
     products: state.userReducer.data && state.userReducer.data.result,
     //addProduct: state.userReducer.addProduct
    };
  
  };
  
  const mapDispatchToProps = dispatch => {
  
    return bindActionCreators({
     postMethod,
     deletMethod,
     getAllProducts
    },dispatch);
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
  //export default Inventory;