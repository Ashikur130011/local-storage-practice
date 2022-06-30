const addToDb = id => {
    const exist = getDB()
    console.log(exist);
    let shopping_cart = {}
    if(!exist){
        shopping_cart[id] = 1
    }
    else{
        shopping_cart= JSON.parse(exist);
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] +1 
            shopping_cart[id] = newCount
        }
        else{
            shopping_cart[id] = 1
        }
    }
    updateItem(shopping_cart)
}

const getDB = () => localStorage.getItem("shopping_cart");
const updateItem = cart => {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
}

const removeItem = (id) =>{
    const exist = getDB()
    if(!exist){

    }
    else{
        const shopping_cart = JSON.parse(exist)
        delete shopping_cart[id]
        updateItem(shopping_cart)
    }
}
export {
    addToDb, removeItem
}