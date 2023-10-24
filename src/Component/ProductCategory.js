import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import Spinner from './Spinner';



const ProductCategory = () => {
    const [products, setProducts] = useState([]);

    const url = 'https://fakestoreapi.com/products';

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to run the effect only once

    if (products.length > 0) {
        return (
            <div >
                {/* {products.map((product, index) => (
            <div className='block relative h-48 rounded overflow-hidden' key={index}>
         <img className='object-cover object-center w-full h-full block' src={product.image} alt={product.title} />
                <a>{product.category}</a>
                <h1>{product.title}</h1>
                <div>{product.price}</div>
            </div>
        ))}
                */}
                  <div className='px-20 mx-14'>
                    
                    <h3 className=' font-mono bg-purple-300 text-4xl text-center m-2 py-20 border-2 text-white underline border-purple-500' >Products Category
                   </h3>
                    
                    </div>  
                <div className=" m-20 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      <Fade top cascade>
        {products.map((product, index) => (
          <article key={index} className="max-w-xs mx-auto mt-4 shadow-lg border shadow-purple-400 border-2 border-purple-500 rounded-md duration-300 hover:shadow-md">
            <a href={product.id}>
              <img src={product.image} loading="lazy" alt={product.title} className="h-40 w-full text-left font-bold object-cover rounded-t-md text" />
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-8 h-8 rounded-full overflow-hidden">
                  <img src={product.image} className="w-full h-full object-cover" alt={product.title} />
                </div>
                <div className="ml-3">
                  {/* <span className="block text-gray-900">{product.category}</span> */}
                  <span className="block text-gray-400 text-xs">{product.id}</span>
                </div>
              </div>
              <div className="pt-2 px-4 m-2">
                <h3 className="text-md text-gray-900 font-mono text-lg smb-1 font-bold text-left text-center">{product.category}</h3>
                <p className="text-gray-400 text-sm text-justify m-2">{product.description.slice(0,100)}{product.description.length > 0 && '...'}</p>
              </div>
            </a>
          </article>
        ))}
      </Fade>
    </div>
            </div>
        );



    }

    return (
        <div>
            <Spinner></Spinner>
        </div>
    );
};

export default ProductCategory;

