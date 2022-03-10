
import HomeHero from "../components/Elements/HomeHero/HomeHero";
import Introduction from "../components/Elements/Introduction/Introduction";
import Skills from "../components/Elements/Skills/Skills";
import Layout1 from "../components/Layout/layout1";


export default function Home() {
  return (
    <Layout1>
      <HomeHero/>
      <Introduction/>
      <Skills/>
    </Layout1>
  )
}
