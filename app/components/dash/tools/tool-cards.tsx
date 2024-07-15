import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/app/components/ui/avatar"

import { Ellipsis } from "lucide-react"
import Link from "next/link";


async function getTools() {    
    try {
        const ToolsAPIURL = `${process.env.API_URL}/tools`;
        // console.log(AgentsAPIURL)
        const response = await fetch(ToolsAPIURL, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        
        const tools = await response.json()
        if(!tools) return null

        return tools
    } catch (error) {
        return null
    }
}

export default async function ToolCards({ idCrew }:any) {

    const tools = await getTools()

    if(tools == null) {
        return <div>Erro ao buscar os dados</div>;
    }

    return(
        <>
            { tools.map((tool: any) => 

                <div key={tool.id_tool} className="flex flex-wrap border-2 w-56 h-20 border-slate-100 rounded-md p-4 m-2">
                    <div className="flex justify-between">
                        <div className="flex">
                            {/* <Avatar className="mr-2">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar> */}
                            <div className="">
                                <h4 className="text-sm font-semibold">{tool.name_tool ?? "Vazio"}</h4>
                                {/* <span className="text-xs font-light">{tool.role_agent ?? "Vazio"}</span> */}
                            </div>
                        </div>
                        {/* <div className=" ">
                            <Link className="" href="">                                        
                                <Ellipsis className="" />
                            </Link>
                        </div> */}
                    </div>
                </div>
            
            ) }
        </>


    )
}