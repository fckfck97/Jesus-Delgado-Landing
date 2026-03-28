import { HomePage } from "@/components/home/home-page"
import { HomePageSchemaScripts } from "@/components/seo/schema-scripts"

export default function Page() {
  return (
    <>
      <HomePageSchemaScripts />
      <HomePage />
    </>
  )
}
