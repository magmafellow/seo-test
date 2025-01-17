'use client'

import Options from "../components/options"

export default function Page() {
  return (
    <div>
      <p>path=seo-page-client-noloading</p>
      <h1 className="text-2xl font-bold underline">My magmas client no-state-loading blog</h1>
      <Options />
      <p>title here, client component, immediate appearing</p>
    </div>
  )
}
