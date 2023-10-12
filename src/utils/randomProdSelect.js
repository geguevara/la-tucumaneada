import { products } from "../data/Products";

export const randomProdSelect =(cant)=>{
    const nuevoArray =[]
    while (nuevoArray.length< cant){
        const indexRandom = Math.floor(Math.random()*products.length);

        if (!nuevoArray.length){
            nuevoArray.push(products[indexRandom])
        }
        const prodExisting =nuevoArray.find((newProd)=>{
            return newProd.id=== products[indexRandom].id
        });
        if(!prodExisting){
            nuevoArray.push(products[indexRandom])
        }
    }
    return nuevoArray
}