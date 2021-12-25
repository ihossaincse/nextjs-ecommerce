import React from 'react'

const CartRow = ({ data }) => {
    return (
        <div className="flex items-center justify-between p-3 mb-2 text-base bg-white">
          <div>{data.name}</div>  
          <div>${data.price.raw}</div> 
        </div>
    )
}

export default CartRow
