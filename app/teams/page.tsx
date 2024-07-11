import { Button } from "@/app/components/ui/button"
import TeamCarrousel from "@/app/components/teams/team-carrousel"

export default function Teams() {
    return(
        <div className="flex max-h-screen flex-row">
            <div className="flex-grow overflow-y-auto p-10">
                <div className="w-full h-full">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-2xl font-semibold">Equipes</h1>
                    </div>
                    <div className="flex w-full items-center justify-between border-b-2 border-slate-100 py-2 mb-2">
                        <h2 className="text-sm font-normal text-slate-500">Selecione a equipe que quer utilizar</h2>
                    </div>
                    <div className="flex w-full items-center justify-end">
                        <Button>+Equipe</Button>
                    </div>
                    <div className="flex w-full max-h-screen justify-center items-center">
                        <TeamCarrousel />
                    </div>
                </div>
            </div>
        </div>
    )
}