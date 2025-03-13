import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export default function layout({ children }: Props) {
    return (
        <div className='flex'>
            <Sidebar />
            {
                children
            }
        </div>
    )
}