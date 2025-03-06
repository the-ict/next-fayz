import Map from '@/components/Map'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className='min-h-[50vh]'>
            <Map />
        </div>
    )
}