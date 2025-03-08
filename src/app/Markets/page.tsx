import Map from '@/components/Map'
import React from 'react'


export default function page() {
    return (
        <div className='min-h-[50vh]'
            style={{
                backgroundColor: window.Telegram.WebApp.themeParams.bg_color,
                color: window.Telegram.WebApp.themeParams.text_color
            }}>
            <Map />
        </div>
    )
}