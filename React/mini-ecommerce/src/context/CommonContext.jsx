import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

const Context = createContext();

export default function CommonContext({children}) {
    const [isLogin, setIsLogin] = useState(0);

    // var getCartData = localStorage.getItem('cartItems');
    // var getCartData = JSON.parse(getCartData);

    // const [cartItems, setCartItems] = useState(getCartData ? getCartData : []);

    var getCartData = JSON.parse(localStorage.getItem('cartItems'));

    const [cartItems, setCartItems] = useState(getCartData ?? []);

    const addToCart = (product) => {

        var checkCart = cartItems.filter((v) => {
            if(v.id == product.id){
                return v;
            }
        })

        console.log(checkCart)

        if(checkCart.length == 0){
            const cart = {
                id : product.id,
                name : product.name,
                price : product.price,
                description : product.description,
                image : product.image,
                quantity : 1
            }

            const finalCartData = [cart, ...cartItems];

            // var cartStorage = JSON.stringify(finalCartData);
            // localStorage.setItem('cartItems', cartStorage);

            localStorage.setItem('cartItems', JSON.stringify(finalCartData))

            setCartItems(finalCartData);
            toast.success('Add to Cart !')
            
        } else {
            const cartData = cartItems.map((v) => {
                if(v.id == product.id){
                    v.quantity++;
                    return v;
                } else {
                    return v;
                }
            })

            const finalCartData = [...cartData];

            localStorage.setItem('cartItems', JSON.stringify(finalCartData))

            setCartItems(finalCartData);
            toast.success('Update Cart !')
        }

        
    }

    const updateCart = (id, type) => {
        if(type == 'plus'){
            const cartData = cartItems.map((v) => {
                if(v.id == id){
                    if(v.quantity < 5){
                        v.quantity++;
                        toast.success('Update Cart !')
                        return v;
                    } else {
                        toast.error('You can add only 5 qty max !')
                        return v;
                    }
                } else {
                    return v;
                }
            })

            const finalCartData = [...cartData];

            localStorage.setItem('cartItems', JSON.stringify(finalCartData))

            setCartItems(finalCartData);
            
        } else {
            const cartData = cartItems.map((v) => {
                if(v.id == id){
                    if(v.quantity > 1){
                        v.quantity--;
                        toast.success('Update Cart !')
                        return v;
                    } else {
                        toast.error('Minimun 1 qty is required !')
                        return v;
                    }          
                } else {
                    return v;
                }
            })

            const finalCartData = [...cartData];

            localStorage.setItem('cartItems', JSON.stringify(finalCartData))

            setCartItems(finalCartData);
            
        }
    }

    const removeCart = (id) => {
        if(confirm('Are you sure you want to remove ?')){
            const cartData = cartItems.filter((v) => {
                if(v.id != id){
                    return v
                }
            })
            const finalData = [...cartData];
            setCartItems(finalData);
            localStorage.setItem('cartItems', JSON.stringify(finalData));
            toast.success('Remove from cart');
        }
    }

    const clearCart = (id) => {
        if(confirm('Are you sure you want to clear ?')){
            setCartItems([]);
            localStorage.removeItem('cartItems');
            toast.success('Clear cart');
        }
    }

    const data = {isLogin, setIsLogin, cartItems, setCartItems, addToCart, updateCart, removeCart, clearCart}

    return (
        <>
            <Context.Provider value={data}>
                {children}
            </Context.Provider>
        </>
    )
}

export { Context }