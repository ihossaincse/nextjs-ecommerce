import Image from 'next/image'
import React from 'react'

const Product = ({ product }) => {
    return (
        <div className="max-w-full overflow-hidden bg-white rounded shadow-lg sm:max-w-sm">
            <Image src={product?.image?.url} alt={product?.name} layout="responsive" objectFit="cover" width={6} height={3} />
            <div className="flex items-center justify-between px-6 py-4 pb-2">
                <div className="mb-2 text-xl font-bold">{product?.name}</div>
                <p className="text-lg font-bold">${product?.price?.formatted}</p>
            </div>
            <div className="flex items-center justify-between px-6 pb-6">
                <div className="h-12 overflow-hidden text-base text-gray-700" dangerouslySetInnerHTML={{__html: product?.description}}></div>
            </div>
        </div>
    )
}

export default Product
