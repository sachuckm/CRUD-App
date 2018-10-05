import React, { Component } from 'react';

function inputItem (props) {
    const inputtagEditatble = !props.children.action ? (
        <div>
     <input type="text" value = {props.children.code} className="listCode"/>
    <input type="text" value = {props.children.product} className="listCode"/>
    <input type="text" value = {props.children.stock} className="listCode"/>
    <input type="text" value = {props.children.expiry_date} className="listCode"/>
    </div>) 
    : (<div className="Form" >
    <input type="text" defaultValue = {props.children.code} className="listCode"/>
    <input type="text" defaultValue = {props.children.product} className="listCode"/>
    <input type="text" defaultValue = {props.children.stock} className="listCode"/>
    <input type="text" defaultValue = {props.children.expiry_date} className="listCode"/>
    </div>
    )
  return (
    <div className="inventory">
   {editable}
    
    </div>
  );
}
  export default inputItem;