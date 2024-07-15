import SideNav from "@/app/components/dash/sidenav";
import TaskTable from "@/app/components/dash/tasks/task-table";
import { Button } from "@/app/components/ui/button"

// export default function Home({ searchParams }: { searchParams: { idcrew: string } }) {
export default function Tasks({ params }: { params: { idcrew: string } }) {

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
                                <h1 className="text-2xl font-semibold">Tarefas</h1>
                            </div>
                            <div className="flex w-full items-center justify-between border-b-2 border-slate-100 py-2 mb-2">
                                <h2 className="text-sm font-normal text-slate-500">Tarefas da equipe</h2>
                            </div>
                            <div className="flex w-full items-center justify-end">
                                <Button>+ Tarefas</Button>
                            </div>
                            <div className="mt-4">
                                <TaskTable idCrew={ idCrew }/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        
    )
}