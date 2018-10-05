export const fetchPostError = () => {
    return {
      type: 'FETCH_POST_ERROR'
    };
  };
export const fetchPostSuccess = (data) => {
    return {
    type: 'FETCH_POST_SUCCESS',
    data:data,
    };
  };
  export const fetchDeleteError = () => {
    return {
      type: 'FETCH_DELETE_ERROR'
    };
  };
export const fetchDeleteSuccess = (data) => {
    return {
    type: 'FETCH_DELETE_SUCCESS',
    data
    };
  };
  export const updateProducts = () => {
    return {
    type: 'PRODUCTS_UPDATE',
    addProduct: true
    };
  };
export const postMethod = (selectedItem, productCB, failureCB) => {
    return dispatch => {
        let itemURI = selectedItem  && selectedItem._id ? `http://localhost:3002/products/${selectedItem._id}` : `http://localhost:3002/products`;
        const request = new Request(itemURI , {
            method:'POST',
        bodyUsed:true,
        body: JSON.stringify(selectedItem),
          headers: new Headers({
            "Content-Type": "application/json"
          })
        });
        console.log('dispath');
    
        return fetch(request).then(res => {
    console.log('success'+res); 
    alert("succesfull");
    if(res.status === 200) {
      productCB ? productCB(): '';
    } else {
      failureCB ? failureCB(): '';
    }
    
            let result = {message : "updated", data:res }
          dispatch(getAllProducts());
        }).catch(err => {
    console.log('error');
    failureCB ? failureCB(): '';
          dispatch(fetchPostError(err));
        });
      };
}
export const deletMethod = (selectedItem) => {
return dispatch => {

    fetch('http://localhost:3002/products/'+selectedItem._id, {
        method:'DELETE',
        bodyUsed:true,
        headers: {
            "Content-Type": "application/json"
          }
        
    }).then((data) => {
        let result = {message : "Deleted", data:data }

        dispatch(getAllProducts())
console.log('!!!!!!!!!!!!!!!!!!data))))))))))))))))'+JSON.data);
    }).catch((e)=>{
        dispatch(fetchDeleteError(e) )
console.log('############################ERROR###########'+e);
    })
}
}
export const getAllProducts = () => {
    return dispatch => {

    
    fetch('http://localhost:3002/products').then((data) => data.json()).then(res => {
        //console.log('##########################'+res)
           // this.setState(this.state.products = res.result)
           //let result = ;
//console.log('!!!!!!!!!!!!!!!!!!data))))))))))))))))'+JSON.res);

           dispatch(fetchPostSuccess(res) )
                })
                .catch((e)=>{
        dispatch(fetchDeleteError(e) )

        //console.log('############################ERROR###########'+e);
                })
            }
}

