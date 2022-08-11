import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [cartProducts, setCartProducts] = useState([]);
    
    const addItem = (product) => {

        
        const isInCart = cartProducts.find((productInCart) => productInCart.id == product.id);
        if(isInCart){
            const newArray = cartProducts.map((productInCart) => {
                if(productInCart.id == product.id){
                    return{
                        ...productInCart,
                        cantidad: productInCart.cantidad + product.cantidad,
                    }
                } else {
                    return productInCart
                }
            });
            setCartProducts(newArray);
        } else {
            setCartProducts([...cartProducts, product]);
        }
    }

    const clear = () => {
        setCartProducts([]);
    }

    const removeItem = (id) => {
        const newCart = cartProducts.filter((productInCart) => productInCart.id != id);
        setCartProducts(newCart);
    }

    const data = {
        cartProducts,
        addItem,
        clear,
        removeItem
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }