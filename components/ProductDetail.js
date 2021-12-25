import Image from 'next/image';
import React, { useContext } from 'react';
import MyAppContext from "../MyAppContext";

const ProductDetail = ({ product }) => {
    const value = useContext(MyAppContext);
    
    return (
        <div className="grid max-w-full grid-cols-1 overflow-hidden bg-white rounded shadow-lg sm:grid-cols-2">
            <div>
                <Image src={product?.image?.url} alt={product?.name} layout="responsive" objectFit="cover" width={6} height={6} />
            </div>
            <div className="px-10 py-6">
                <div className="py-4 pb-2">
                    <div className="mb-2 text-4xl font-bold">{product?.name}</div>
                </div>
                <div className="flex items-center justify-between pb-4">
                    <div className="text-base text-gray-700" dangerouslySetInnerHTML={{__html: product?.description}}></div>
                </div>
                <div className="flex items-center justify-between py-4 pb-2">
                    <p className="text-xl font-bold">${product?.price?.formatted}</p>
                    <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-700" onClick={() => value.setCart([...value.state.cart, product])}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail