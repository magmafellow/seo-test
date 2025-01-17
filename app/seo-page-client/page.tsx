import Options from "../components/options";
import SeoBlockClient from "../components/seo-client";

export default function Page() {
  return (
    <div>
      <p>path=seo-page-client</p>
      <SeoBlockClient />
      <Options />

      <p>title here, client component, delay <span className="text-amber-700">1500ms</span></p>
    </div>
  )
}