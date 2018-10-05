import React, { Component } from 'react';
import './ListItem.css';
import DatePicker  from 'react-datepicker'

function ListItem (props) {
    const editable = !props.children.action ? (
        <div className = "itemLine">
    <input type="text" name="code" value = {props.children.code} className="listCode"/>
    <input type="text" name="product" value = {props.children.product} className="listProduct"/>
    <input type="text" name="stock" value = {props.children.stock} className="listStock"/>
    <input type="text" name="expiry_date" value = {props.children.expiry_date} className="listExpDate"/>
    <input type="text" type="submit" value = "Change"   onClick={( event ) => props.changedClicked( event,  props.children)}  className="listbuttonGreen"/>
    <input type="text" type="submit" value = "Delete" onClick={( event ) => props.deleteClicked( event,  props.children)} className="listbuttonRed"/></div>) : (<div className="Form" >
    <input type="text" name="code" defaultValue = {props.children.code} className="listCode actionActive"  onChange={(event)=>props.handleChange(event, 'code',props.children)}/>
    <input type="text" name="product" defaultValue = {props.children.product} className="listProduct actionActive" onChange={(event)=>props.handleChange(event,'product', props.children)}/>
    <input type="text" name="stock" defaultValue = {props.children.stock} className="listStock actionActive" onChange={(event)=>props.handleChange(event, 'stock',props.children)}/>
    <input type="text" name="expiry_date" defaultValue = {props.children.expiry_date} className="listExpDate actionActive" onChange={(event)=>props.handleChange(event, 'expiry_date',props.children)}/>
    <input type="text" type="submit" value = "save" onClick={( event ) => props.changedClicked( event,  props.children)} className="listbuttonGreen"/>
    <input type="text" type="submit" value = "Delete" onClick={( event ) => props.deleteClicked( event,  props.children)} className="listbuttonRed"/>
    </div>
    
    )
   
  return (
    <div className="listItem">
    {}
   {editable}
    </div>
  );
}
  export default ListItem;