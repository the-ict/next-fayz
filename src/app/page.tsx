"use client"

import React from 'react'
import Header from "@/components/Header"
import AboutUs from '@/components/AboutUs'
import Map from '@/components/Map'
import Contacts from '@/components/Contacts'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center w-full'>
        <div className='w-[1124px]'>
          <Header />
          <AboutUs />
          <Map />
          <Contacts />
        </div>
      </div>
      <Footer />
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
