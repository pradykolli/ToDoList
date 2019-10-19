import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../Actions/types';
const initialState = {
    items : [
        // {id: uuid(), name: 'Eggs'},
        // {id: uuid(), name: 'Chicken'},
        // {id: uuid(), name: 'Mutton'},
        // {id: uuid(), name: 'Beef'},
        // {id: uuid(), name: 'Candy'}
    ],
    loading : false
}
export default function( state = initialState, action){
    switch(action.type){
        case GET_ITEMS : return{
            ...state,
            items: action.payload,
            loading:false
        }; 
        case DELETE_ITEM : return{
            ...state,
            items: state.items.filter(item => item._id !== action.payload)
        }; 
        case ADD_ITEM : return{
            ...state,
            items: [action.payload, ...state.items]
        }; 
        case ITEMS_LOADING : return{
            ...state,
            loading: true
        }; 
        
        default :
            return state;
    }
}