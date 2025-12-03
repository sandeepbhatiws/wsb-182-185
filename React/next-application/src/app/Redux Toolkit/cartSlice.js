import { Description } from '@headlessui/react';
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


var getCart = Cookies.get('cart_items');
var getCart = getCart ? JSON.parse(Cookies.get('cart_items')) : [];
var getCart = getCart ?? [];

const initialState = {
  cartItems : getCart,  // State Define and its value
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      var checkCart = state.cartItems.filter((v) => {
        if(v.id == action.payload.id){
          return v;
        }
      })

      if(checkCart.length  == 0){
        const data = {
          id : action.payload.id,
          name : action.payload.name,
          image : action.payload.image,
          description : action.payload.description,
          price : action.payload.price,
          quantity : 1
        }

        const finalData = [data, ...state.cartItems];
        state.cartItems = finalData;
        Cookies.set('cart_items', JSON.stringify(finalData));
        toast.success('Add to cart');
      } else {
        var checkCart = state.cartItems.filter((v) => {
          if(v.id != action.payload.id){
            return v;
          }
        })

        const finalData = [ ...checkCart];
        state.cartItems = finalData;
        Cookies.set('cart_items', JSON.stringify(finalData));
        toast.success('remove from cart');
      }

        console.log(action.payload);
    },
    addQuanity: (state, action) => {
      const cartData = state.cartItems.map((item) => {
        if(item.id == action.payload){

          if(item.quantity < 5){
            item.quantity++;
            toast.success('Update cart')
            return item;
          } else {
            toast.error('Maximum qty reached.')
            return item;
          }
          
        } else {
          return item;
        }
      })
      
      const finalData = [...cartData];
      state.cartItems = finalData;
      Cookies.set('cart_items', JSON.stringify(finalData));

    },
    updateQuanity: (state, action) => {
      console.log(action)
    },
    removeCart: (state, action) => {
      
      if(confirm('Are you sure you want to delete ?')){
        var checkCart = state.cartItems.filter((v) => {
          if(v.id != action.payload){
            return v;
          }
        })

        const finalData = [...checkCart];
        state.cartItems = finalData;
        Cookies.set('cart_items', JSON.stringify(finalData));
        toast.success('Remove from cart');
      }
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, addQuanity, updateQuanity, removeCart } = cartSlice.actions

export default cartSlice.reducer