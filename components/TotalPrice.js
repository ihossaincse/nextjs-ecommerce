import React, { useEffect, useState } from 'react';

const TotalPrice = ({ data }) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        var total = 0;
        for (var i  = 0; i < data.length; i++){
            total  += data[i].price.raw;
        }
        setPrice(total)
    }, [data]);

    return (
        <div className="p-3 mb-2 text-xl font-bold text-right bg-green-200">
            Total: ${price}
        </div>
    )
}

export default TotalPrice
