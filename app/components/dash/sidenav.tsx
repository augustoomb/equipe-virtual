import Link from "next/link"
import Image from "next/image"
import Logout from "./logout"
import HomeImg from "@/public/home.svg"
import HammerImg from "@/public/hammer.svg"
import LineImg from "@/public/line-chart.svg"
import SettingsImg from "@/public/settings.svg"

const baseURL = "/dash"

const arrNavLinks = [
    { "id": 1, "href": "", "srcImage": HomeImg, "alt": "Link da home page do software Equipe Virtual", "text": "Home" },    
    { "id": 2, "href": "/agents", "srcImage": HammerImg, "alt": "Link da home page do software Equipe Virtual", "text": "Agentes" },
    { "id": 3, "href": "/tasks", "srcImage": LineImg, "alt": "Link da home page do software Equipe Virtual", "text": "Tarefas" },
    // { "id": 4, "href": "/settings", "srcImage": SettingsImg, "alt": "Link da home page do software Equipe Virtual", "text": "Configurações" },
]

const mountSideNav = (idCrew: string) => {
    return arrNavLinks.map(itemLink => {
        return (
            <Link href={ `${baseURL}/${idCrew}${itemLink.href}` } className="flex h-12 flex-row justify-start pl-4 hover:bg-slate-100" key={ itemLink.id }>
                <Image 
                    src={ itemLink.srcImage }
                    width={25}
                    height={25}
                    alt={ itemLink.alt }
                    className="pr-2 "
                />
                <span className="text-sm w-full text-slate-500 self-center font-normal hover:font-semibold">{ itemLink.text }</span>
            </Link>
        )
    })
}

export default function SideNav( { idCrew }: { idCrew: string } ) {
    
    return(
        <div className="flex h-full flex-col border-r-2 border-slate-100">
            <div className="border-b-2 border-slate-100 py-4 mb-2">
                <Link href="#" className="flex flex-row justify-center">
                    <Image 
                        src={ "/logo.png" }
                        width={30}
                        height={30}
                        alt="Logo do software Equipe Virtual"
                        className="pr-2"
                    />
                    <span className="text-base self-center font-semibold">Equipe Virtual</span>
                </Link>
            </div>

            <div className="flex h-full flex-col justify-between">
                <div>
                 
                    { mountSideNav(idCrew) }

                </div>

                <Logout />
            </div>
             
        </div>
    )
}