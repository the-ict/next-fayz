"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Search from './Search';
import CategoryCard from "./CategoryCard"
import { Carousel } from 'react-responsive-carousel';


type Props = {}

export default function Header({ }: Props) {
    // const [isClient, setIsClient] = useState(false);

    // useEffect(() => {
    //     setIsClient(true);
    // }, []);

    // if (!isClient) return null;
    // const { Carousel } = require('react-responsive-carousel');


    return (
        <div className='mt-10 h-min-[calc(100vh-50vh)]'>
            <Carousel autoPlay={true} autoFocus emulateTouch infiniteLoop>
                <div>
                    <img src="/slider1.png" alt="slider1" />
                </div>
                <div>
                    <img src="/slider1.png" alt="slider1" />
                </div>
            </Carousel>
            <h3 className='text-[30px] font-semibold w-[300px] max-sm:text-[14px]'>Kategoriya & Qidirish</h3>
            <Search />
            <div className="flex items-center flex-wrap gap-2 mt-6">
                {
                    [{
                        img: "https://ishonchsavdo.uz/_next/image?url=%2Fassets%2Fimages%2Fasset-4.png&w=640&q=75",
                        category: "Noutbook"
                    }, {
                        img: `https://ishonchsavdo.uz/_next/image?url=%2Fassets%2Fimages%2Fasset-3.png&w=640&q=75`,
                        category: "Kirmashina"
                    }, {
                        img: "https://ishonchsavdo.uz/_next/image?url=%2Fassets%2Fimages%2Fasset-1.png&w=640&q=75",
                        category: "Televizor"
                    }, {
                        img: "https://ishonchsavdo.uz/_next/image?url=%2Fassets%2Fimages%2Fasset-2.png&w=640&q=75",
                        category: "Telefon"
                    }].map(item => (
                        <CategoryCard key={item.img} item={item} />
                    ))
                }
            </div>
            <div className="flex items-center gap-2 mt-10 max-sm:flex-col">
                <div className='flex-1 max-sm:w-full flex items-center p-4 flex-col gap-2 bg-[#FDFDFD] hover:shadow-2xl transition-all animation-block'>
                    <img src="/location.png" alt="Location" width={37} height={37} />
                    <p className='text-[14px]'>
                        <b>6 - </b> ta do'kon
                    </p>
                </div>
                <div className='flex-1 flex max-sm:w-full items-center p-4 flex-col gap-2 bg-[#FDFDFD] hover:shadow-2xl transition-all animation-block'>
                    <img src="/magazine.png" alt="Location" width={37} height={37} />
                    <p className='text-[14px]'>
                        <b>6000 - </b> dan ortiq muddatli to‘lov asosida mahsulotlar
                    </p>
                </div>
                <div className='flex-1 flex max-sm:w-full items-center p-4 flex-col gap-2 bg-[#FDFDFD] hover:shadow-2xl transition-all animation-block'>
                    <img src="/percent.png" alt="Location" width={37} height={37} />
                    <p className='text-[14px]'>
                        <b>Foizsiz - </b> Muddatli to’lov
                    </p>
                </div>
            </div>
        </div>
    )
}
