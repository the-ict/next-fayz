import Contacts from '@/components/Contacts'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
  return (
    <div className='min-h-[50vh]'>
      <Contacts />
    </div>
  )
}