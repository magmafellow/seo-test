import Options from "./components/options";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold underline">My seo test</h1>
      <p>Hello, it is a test for seo</p>
      <Options />

      <p>title here, server component, immediate appearing</p>
    </div>
  )
}
