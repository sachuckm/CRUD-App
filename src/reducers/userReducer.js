export const userReducer = (state={data:[]}, action) =>{
    switch(action.type) {
        case 'FETCH_POST_SUCCESS' :
        case 'FETCH_DELETE_SUCCESS' :
        return{
            ...state,
            data: action.data
        }
        case 'FETCH_POST_ERROR' :
        case 'FETCH_DELETE_ERROR' :

        return {
            ...state,
            data: ''
        }
        case 'PRODUCTS_UPDATE':
        return {
            ...state,
            addProduct: action.addProduct
        }
        default:
    return state;
    }
     
}
export default userReducer;