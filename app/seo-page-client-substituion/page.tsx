'use client'

import { useEffect, useState } from 'react'
import Options from '../components/options'
import SeoBlockClient from '../components/seo-client'

export default function Page() {
  const [textH1, setTextH1] = useState('Temporaryly magmas blog')

  useEffect(() => {
    setTimeout(() => {
      setTextH1('My magmas client blog')
    }, 1500)
  }, [])

  return (
    <div>
      <p>path=seo-page-client</p>
      <h1 className="text-2xl font-bold underline">{textH1}</h1>
      <Options />

      <p className='text-orange-400 text-lg pl-2'>pay attention on it, the heading is changing!</p>
      <p>title here, client component, appearing with substituion</p>
    </div>
  )
}
