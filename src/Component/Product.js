import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import Spinner from './Spinner';





const Product = () => {
  const [products, setProducts] = useState([]);
 
  const [filter,setFilter] = useState()


    const filterProduct = (cat) => {
        if (cat === "all") {
          setProducts(products); 
        } else {
          const updatedList = products.filter((x) => x.category === cat);
          setProducts(updatedList);
        }
      };



  const url = 'https://fakestoreapi.com/products';




  // const filterProduct = (cat) => {
  //   if (cat === "all") {
  //     setProducts(products); // Show all products
  //   } else {
  //     const updatedList = products.filter((x) => x.category === cat);
  //     setProducts(updatedList);
  //   }
  // };







  useEffect(() => {
    axios.get(url)
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 




  if (products.length > 0) {
    return (
      <div >
        <div>
          <h3 className='text-4xl text-center font-mono underline m-5'>Filters</h3>
        <div >
        <button
            className="mx-5 bg-white-500 text-black hover:border-gray-500 py-2 px-4 border-2 rounded-md border-purple-500"
            onClick={() => setFilter(products)
            }
          >
            All
          </button>
          <button
            className="mx-5 bg-white-500 text-black hover:border-gray-500 py-2 px-4 border-2 rounded-md border-purple-500"
            onClick={() => filterProduct("men's clothing")
            }
          >
            Men
          </button>
          <button
            className="mx-5 bg-white-500 text-black py-2 px-4 border-2 rounded-md border-purple-500 hover:border-gray-500"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </button>
          <button
            className=" mx-5 bg-white-500 text-black hover:border-gray-500 py-2 px-4 border-2 rounded-md border-purple-500 "
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="mx-5 bg-white-500 text-black hover:border-gray-500 py-2 px-4 border-2 rounded-md border-purple-500"
            onClick={() => filterProduct("electronics")}
          >
            Electronincs
          </button>
    </div>
        </div>
        {/* {products.map((product, index) => (
            <div className='block relative h-48 rounded overflow-hidden' key={index}>
         <img className='object-cover object-center w-full h-full block' src={product.image} alt={product.title} />
                <a>{product.category}</a>
                <h1>{product.title}</h1>
                <div>{product.price}</div>
            </div>
        ))}
                */}

        <div className=" m-20 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        
          <Fade cascade>

            {products.slice(0,4).map((product, index) => (
              <article key={index} className="max-w-xs mx-auto mt-4 shadow-lg border shadow-purple-400 border-2 border-purple-500 hover:border-gray-500 rounded-md duration-300 hover:shadow-sm">
                <a href={product.id}>
                  <img src={product.image} loading="lazy" alt={product.title} className="h-40 w-full text-left font-bold object-cover rounded-t-md text" />
                  <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                    <div className="flex-none w-8 h-8 rounded-full overflow-hidden">
                      <img src={product.image} className="w-full h-full object-cover" alt={product.title} />
                    </div>
                    <div className="ml-3">
                      <span className="block text-gray-900">{product.category}</span>
                      <span className="block text-gray-400 text-xs">{product.id}</span>
                    </div>
                  </div>
                  <div className="pt-2 px-4 m-2">
                    <h3 className="text-md text-gray-900 smb-1 font-bold text-left">{product.title}</h3>
                    <p className="text-gray-400 text-sm text-justify m-2">{product.description.slice(0, 100)}{product.description.length > 0 && '...'}</p>
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

export default Product;

