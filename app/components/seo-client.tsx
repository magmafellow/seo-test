'use client'

import { useEffect, useState } from "react"

export default function SeoBlockClient() {
  const [textH1, setTextH1] = useState('')


  useEffect(() => {
    setTimeout(() => {
      setTextH1('My magmas client blog')
    }, 1500)
  }, [])
  
  
  return (
    <div>
      <h1 className="text-2xl font-bold underline">{textH1}</h1>
      <p className="text-base text-slate-800 font-semibold">from seo block</p>
    </div>
  )
}