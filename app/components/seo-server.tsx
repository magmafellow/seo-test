export default function SeoBlockServer({ seo_h1 }: { seo_h1: string }) {
  return (
    <div>
      <h1 className="text-2xl font-bold underline">{seo_h1}</h1>
      <p className="text-base text-slate-800 font-semibold">from seo block</p>
    </div>
  )
  
}