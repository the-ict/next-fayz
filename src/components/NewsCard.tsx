import React from 'react'

type Props = {}

export default function NewsCard({ }: Props) {
    return (
        <div className='w-[300px] max-sm:w-full max-sm:h-[400px] p-5 rounded bg-[#fdfdfd] h-max cursor-pointer mt-10 hover:bg-blue-400 hover:text-white transition-all'>
            <div>
                <img
                    width={"100%"}
                    className='h-[400px] max-sm:h-[320px] object-cover'
                    src="https://instagram.ftas2-2.fna.fbcdn.net/v/t51.2885-15/475928699_1963264037494252_4287681330530926138_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzOC5zZHIuZjcxODc4Lm5mcmFtZV9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.ftas2-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2AF0VxuMW9W7vtnhg1Lj_wBZlKoVcwkotq2q1iU4lUZb88U0p3TwcgrzqwQVLWcWuk8&_nc_ohc=t5ErSBIg58cQ7kNvgGuR_oc&_nc_gid=30cd7d7860f0485d96d85801566223a0&edm=AO1PPasBAAAA&ccb=7-5&ig_cache_key=MzU1OTkzMjQ3NTgxMzEwOTc2OA%3D%3D.3-ccb7-5&oh=00_AYB09qF0Ifs6Y38QvrVeDV1eU7xPiENh5M7WKM3_jRnscg&oe=67CC883C&_nc_sid=497b72" alt="" />
            </div>
            <div className='mt-3 flex items-center gap-2'>
                <p className='font-bold text-[14px]'>Ramazon oyi uchun chegirma</p>
                <button className='bg-[#000] p-2'>
                    <img src='/buttonIcon.png' />
                </button>
            </div>
        </div>
    )
}