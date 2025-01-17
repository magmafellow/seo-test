import Link from 'next/link'

export default function Options() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/" className="text-sky-500">
        home
      </Link>
      <Link href="/seo-page-client" className="text-sky-500">
        seo-page-client
      </Link>
      <Link href="/seo-page-server" className="text-sky-500">
        seo-page-server
      </Link>
      <Link href="/seo-page-client-noloading" className="text-sky-500">
        seo-page-client-noloading
      </Link>
      <Link href="/seo-page-client-substituion" className="text-sky-500">
        seo-page-client-substituion
      </Link>
    </div>
  )
}
