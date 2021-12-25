import Link from 'next/link'
import React from 'react'
import Product from './Product'

const Products = ({ products }) => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                <Link href={`/product/${product.permalink}`} key={product.id}>
                    <a>
                        <Product product={product} />
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Products
