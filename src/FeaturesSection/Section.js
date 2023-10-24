import React from 'react'
import Product from '../Component/Product'

const Section = () => {


 
 
  return (
    <div>
        <a  className="group relative block bg-black">
    <img
      alt="Developer"
      src="https://www.hangree.com.pk/cdn/shop/products/WhatsAppImage2022-06-29at5.57.14PM_2000x.jpg?v=1656839079"
      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />
  
    <div className="relative p-4 sm:p-6 lg:p-8">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
        Men's
      </p>
  
      <p className="text-xl font-bold text-white sm:text-2xl">Men T-Shirt</p>
  
      <div className="mt-32 sm:mt-48 lg:mt-64">
        <div
          className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <p className="text-sm text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            perferendis hic asperiores quibusdam quidem voluptates doloremque
            reiciendis nostrum harum. Repudiandae?
          </p>
        </div>
      </div>
    </div>
  </a>
  </div>
  )
}

export default Section