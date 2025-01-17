import Herosection from "./components/herosection";
import Homeaboutus from "./components/homeaboutus";
import Homefoodcategory from "./components/homefoodcategory";
import Homewhychooseus from "./components/homewhychooseus";
import Homedetail from "./components/homedetail";
import Homechoosepick from "./components/homechoosepick";
import Homechefs from "./components/homechefs";
import Hometestimonial from "./components/hometestimonial";
import Homeactiver from "./components/homeactiver";
import Homeblog from "./components/homeblog";
import HomeNavbar from "./components/homenavbar";
import Homemobilenavbar from "./components/Homemobilenavbar";
export default function Home() {
  return (
    <body className="bg-black">
    <div id="main" className="relative left-40 md:left-96 lg:left-0">
    <div className="lg:hidden">
          <Homemobilenavbar/>
          </div>
          <div className="hidden lg:block">
          <HomeNavbar />
        </div>
        <Herosection/>
        <Homeaboutus/>
        <Homefoodcategory/>
        <Homewhychooseus/>
        <Homedetail/>
        <Homechoosepick/>
        <Homechefs/>
        <Hometestimonial/>
        <Homeactiver/>
        <Homeblog/>
    </div>
    </body>
  )
}
