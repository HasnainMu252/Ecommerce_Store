import React from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import Product from '../Component/Product'
import ProductShop from '../Component/ProductShop'



const Shop = () => {
  return (
    <div>
      
      <Header></Header>
      <div className='px-20 mx-14'>
                    
                    <h3 className=' font-mono bg-purple-300 text-4xl text-center m-2 py-20 border-2 text-white underline border-purple-500' >Products Shop
                   </h3>
                    
                    </div>  
      <ProductShop></ProductShop>
      <Footer></Footer>
    </div>
  )
}

export default Shop