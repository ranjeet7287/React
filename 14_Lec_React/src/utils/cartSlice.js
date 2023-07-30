import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        // this reducer mapping of addIteam(action)  
        // this fuction doesn't return anythings it takes and directly modefiy it state
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeitem:(state,action)=>{
            state.items.splice(action,1);
        }
        ,
        clearCart:(state,action)=>{
            state.items=[];
        }
    }
});
export const {addItem,removeitem,clearCart}=cartSlice.actions; // actions not action
export default cartSlice.reducer;  // this not a reducers ☠️ // 


// Behind the Scenes 
// cartSlice={
//     actions:{
//         addItem,
//         removeitem,
//         clearCart
//     },
//     reducer:reducers
// }