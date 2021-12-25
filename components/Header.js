import { ShoppingCartIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import MyAppContext from "../MyAppContext"
import logo from "../public/images/logo.png"

const Header = () => {
    const value = useContext(MyAppContext);
    
    return (
        <div className="flex items-center justify-between px-2 py-3 mx-auto max-w-7xl">
            <div>
                <Link href="/" passHref>
                    <a>
                        <Image src={logo} width="50" height="50" alt="logo" />
                    </a>
                </Link>
            </div>
            {(value.state.cart.length !==0) && 
                <div className="relative">
                    <Link href="/cart" passHref>
                        <a>
                            <ShoppingCartIcon width="30" />
                        </a>
                    </Link>
                    <div className="absolute right-0 z-50 px-1.5 py-0 text-sm bg-orange-400 rounded-full -top-4">{value.state.cart.length}</div>
                </div>
            }
        </div>
    )
}

export default Header
