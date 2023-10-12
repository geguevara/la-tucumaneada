import React from 'react'
import ProductsList from '../../components/ProductsCard/ProductsList'
import Categorias from '../../components/Categorias/Categorias'
import { ProductsContainer} from './Products.styles'
import { useState } from 'react'
import CardProduct from '../../components/ProductsCard/CardProduct'
import Seacrh from '../../components/Search/Seacrh'
import { useSelector } from 'react-redux'

const Products = () => {

  const [query, setQuery] = useState("");
  const [selectCategory, setSelectCategory]= useState(null)
  const { prod } = useSelector((state) => state.products);

  const handleInputChange=(e)=>{
    setQuery(e.target.value)
  }
  
  const filteredItems= prod.filter((product)=>
    product.name.toLowerCase().indexOf(query.toLowerCase())!==-1
  )
  const handleClick=(e)=>{
    setSelectCategory(e.target.value)
  }
  
   function filteredData(prod, selected, query) {
      let filteredProd= prod
      //filtrado Search
      if(query){
        filteredProd= filteredItems;
        selected= null
      }
      
      //filtrado categorias
      if(selected){
        filteredProd= filteredProd.filter(({category, name})=> 
        category=== selected||
        name===selected
        )
        //ver como limpiar el input al seleccionar la 
       } 
      
    
    return filteredProd.map((producto)=>{
     return <CardProduct
        key={producto.id}
        {...producto}
      />
    }
      
    )
    
   }
  const result= filteredData(prod, selectCategory,query)
  return (
    <ProductsContainer>
      <Seacrh query={query} handleInputChange={handleInputChange}/>
      <Categorias handleClick={handleClick}/>

      <ProductsList result={result}/>
     
     {/*  <BtnCuantityProd/> */}
    </ProductsContainer>
    
  )
}

export default Products