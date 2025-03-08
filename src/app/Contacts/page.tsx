"use client"

import Contacts from '@/components/Contacts'
import React from 'react'

export default function Page() {
  return (
    <div className='min-h-[50vh]'
      style={{
        backgroundColor: window.Telegram.WebApp.themeParams.bg_color,
        color: window.Telegram.WebApp.themeParams.text_color
      }}>
      <Contacts />
    </div>
  )
}