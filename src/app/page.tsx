import React from 'react'
import Header from "@/components/Header"
import AboutUs from '@/components/AboutUs'
import Map from '@/components/Map'
import Contacts from '@/components/Contacts'


export default function page() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Map />
      <Contacts />
    </div>
  )
}