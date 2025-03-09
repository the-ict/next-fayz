import React from 'react'
import Header from "@/components/Header"
import AboutUs from '@/components/AboutUs'
import Map from '@/components/Map'
import Contacts from '@/components/Contacts'
import Script from 'next/script'


export default function page() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Map />
      <Contacts />
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
    </div>
  )
}
