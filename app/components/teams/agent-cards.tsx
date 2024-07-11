import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/app/components/ui/avatar"


async function getAgentsByCrewId(crewId:any) {
    try {
        const AgentsAPIURL = `${process.env.API_URL}/agents/${crewId}`;
        const response = await fetch(AgentsAPIURL, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        
        const agents = await response.json()
        if(!agents) return null

        return agents
    } catch (error) {
        return null
    }
}

export default async function AgentCards({ id_crew }:any) {

    const agents = await getAgentsByCrewId(id_crew)

    if(agents == null) {
        return <div>Erro ao buscar os dados</div>;
    }

    return(
        <>
            {new Array(6).fill(null).map((_, index) => {
                const agent = agents[index] || {};
                return (
                    <div key={index} className="flex flex-wrap border-2 border-slate-100 rounded-md p-4">
                        <div className="flex">
                            <Avatar className="mr-2">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="">
                                <h4 className="text-sm font-semibold">{agent.name_agent ?? "Vazio"}</h4>
                                <span className="text-xs font-light">{agent.role_agent ?? "Vazio"}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>


    )
}