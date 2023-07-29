import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        // this reducer mapping of addIteam(action)  
        // this fuction doesn't modefiye anythings it takes and directly modefiy it
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeitem:(state,action)=>{
            state.items.pop();
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