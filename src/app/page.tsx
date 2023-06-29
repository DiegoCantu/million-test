import Sidebar from "./components/Sidebar";
import { HiUsers, HiChartPie, HiDocument, HiAcademicCap } from 'react-icons/hi';
import { HiMapPin } from 'react-icons/hi2';

const bannerImage = "/help.avif"
const sidebarItems = [
  {
    name: 'FAQ',
    children: [
      { name: 'REDY', href: "redy", icon: <HiUsers /> },
      { name: 'PLATAFORMA', href: "plataforma", icon: <HiChartPie /> }
    ],
    href: '#', icon: <HiAcademicCap />
  },
  {
    name: 'SOPORTE',
    children: [
      { name: 'NEGOCIO', href: "negocio", icon: <HiDocument /> }
    ],
    href: '#', icon: <HiMapPin />
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidebar title={"Million"} bannerImage={bannerImage} sidebarItems={sidebarItems} type={"children"} />
    </main>
  )
}
