"use client"
import ProductICard from '@/components/ProductICard'
import Search from '@/components/Search'
import { IProduct } from '@/lib/models/Product'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function Page() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {

        const handleSearch = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/product?name=${pathname.split("/")[3]}`)
                const response = await res.json()

                console.log("response: ", response)

                setProducts(response.product)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }

        handleSearch()
    }, [pathname])



    return (
        <div className='min-h-[70vh]'>
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
                        loading ? (
                            <div className='w-full justify-center flex items-center'>
                                <div className='search-loading'></div>
                            </div>
                        ) : (
                            <div>
                                <h3>Hech narsa topilmadi</h3>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}