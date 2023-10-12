export const addItemToCart= (cartItems, product) =>{
    const prodInCart= cartItems.find( item => item.id === product.id)

    if(prodInCart){
        return cartItems.map((item) => {
            return item.id === prodInCart.id
            ? {
                ...item,
                quantity: item.quantity + 1
            }
            : item
        })
    }
    return[ ...cartItems,{ ...product, quantity: 1 }]
}


export const removeItemToCart = (cartItems, id)=>{
    const prodToRemove = cartItems.find( item => item.id === id);

    if(prodToRemove.quantity > 1){
        return cartItems.map( item => {
            return item.id === prodToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        })
    }
    return cartItems.filter( item => item.id !== prodToRemove.id);
    
}
//envio a cero
export const resetShipppinCost= (cartItems, shippingCost)=>{
    if(cartItems.length === 1 && cartItems[0].quantity===1) {
        return 0
    }
    return shippingCost;
}