"use client"
import ProductICard from '@/components/ProductICard'
import Search from '@/components/Search'
import { ProductItem } from '@/lib/data'
import { searchProductsByName } from '@/lib/getData'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function Page() {
    const [products, setProducts] = useState<ProductItem[]>([])
    const pathname = usePathname()

    useEffect(() => {
        setProducts(searchProductsByName(pathname.split("/")[2]))
    }, [pathname])

    return (
        <div className='min-h-[50vh] '>
            <Search />
            <div className='flex flex-wrap gap-2 mt-10'>
                {
                    products.length > 0 ? (
                        products.map((item, id) => {
                            return (
                                <ProductICard product={item} key={id} />
                            )
                        })
                    ) : (
                        <h3>Hech narsa topilmadi.</h3>
                    )
                }
            </div>
        </div>
    )
}