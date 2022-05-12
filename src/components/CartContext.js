import React, {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if(itemIndex !== -1){
            const copyCart = [...cart];
            copyCart[itemIndex].counter = copyCart[itemIndex].counter + item.counter;
        }else{
            setCart([...cart, item]);
        }
    }
    console.log(cart);


    const removeCart= (id) => {

        setCart([cart.filter(fil => fil.id !== id)]);
    };

    const buyCart = () => console.log('compraste todo');

    return(
        <CartContext.Provider value={{cart, addToCart, removeCart, buyCart}} >
            {children}
        </CartContext.Provider>
    )
}