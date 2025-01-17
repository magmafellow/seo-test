import Options from "../components/options";
import SeoBlockServer from "../components/seo-server";

export default function Page() {
  return (
    <div>
      <p>path=seo-page-client</p>
      <SeoBlockServer seo_h1='My magmas server blog' />
      <Options />
      <p>title here, server component, immediate appearing</p>
    </div>
  )
}
