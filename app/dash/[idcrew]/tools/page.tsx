import SideNav from "@/app/components/dash/sidenav";
import ToolCards from "@/app/components/dash/tools/tool-cards";
import { Button } from "@/app/components/ui/button";

export default function Tools({ params }: { params: { idcrew: string } }) {

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
                                <h1 className="text-2xl font-semibold">Ferramentas</h1>
                            </div>
                            <div className="flex w-full items-center justify-between border-b-2 border-slate-100 py-2 mb-2">
                                <h2 className="text-sm font-normal text-slate-500">Explore as ferramentas disponíveis</h2>
                            </div>
                            {/* <div className="flex w-full items-center justify-end">
                                <Button>+ Ferramentas</Button>
                            </div> */}
                            <div className="flex flex-wrap w-full max-h-screen justify-center items-center mt-4">
                                <ToolCards idCrew={idCrew}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        
    )
}