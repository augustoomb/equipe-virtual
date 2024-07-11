import SideNav from "@/app/components/dash/sidenav";
import { Button } from "@/app/components/ui/button"
import AgentCards from "./agent-cards";

// export default function Home({ searchParams }: { searchParams: { idcrew: string } }) {
export default function Agents({ params }: { params: { idcrew: string } }) {

    const idCrew = params.idcrew

    return(
        <div className="flex h-screen flex-row overflow-hidden">
            <div className="flex-none w-52">
                <SideNav idCrew={idCrew} />
            </div>
            <div className="flex-grow overflow-y-auto p-2">
                
                <div className="flex max-h-screen flex-row">
                    <div className="flex-grow p-10">
                        <div className="w-full h-full">
                            <div className="flex w-full items-center justify-between">
                                <h1 className="text-2xl font-semibold">Agentes</h1>
                            </div>
                            <div className="flex w-full items-center justify-between border-b-2 border-slate-100 py-2 mb-2">
                                <h2 className="text-sm font-normal text-slate-500">Home da equipe</h2>
                            </div>
                            <div className="flex w-full items-center justify-end">
                                <Button>+ Agentes</Button>
                            </div>
                            <div className="flex flex-col w-full max-h-screen justify-center items-center space-y-4 mt-4">
                                <AgentCards idCrew={idCrew}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        
    )
}