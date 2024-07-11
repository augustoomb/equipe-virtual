// 'use client'

// import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/app/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

import { Button } from "@/app/components/ui/button"
// import { buttonVariants } from "@/components/ui/button"

import { Ellipsis } from "lucide-react"


import { auth } from "@/auth"
import AgentCards from "./agent-cards";
import Link from "next/link"

async function getTeamsByUserId(userId:any) {
    try {
        const TeamsAPIURL = `${process.env.API_URL}/crews/${userId}`;
        const response = await fetch(TeamsAPIURL, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        
        const teams = await response.json()
        if(!teams) return null

        return teams
    } catch (error) {
        return null
    }

}

export default async function TeamCarrousel() {

    const session = await auth();
    const userId = session?.user?.id;

    const teams = await getTeamsByUserId(userId)

    if(teams == null) {
        return <div>Não há equipes cadastradas</div>;
    }

    return(
        <Carousel className="h-full w-4/6"
            opts={{
                align: "start",
            }}>
            <CarouselContent className="">
                {teams.map((team: any) => (
                    <CarouselItem key={team.id_crew} >
                        <Card className="py-4">
                            <CardContent className="flex flex-col items-center justify-center">
                                <h3 className="text-4xl font-semibold">{ team.name_crew }</h3>
                                <p className="flex text-wrap h-36 text-center items-center">{ team.description_crew }</p>
                                <div className="gap-6 space-y-6 columns-2">
                                    <AgentCards id_crew={team.id_crew}/>
                                </div>
                                <div className="flex w-full justify-end space-x-2">
                                    {/* <Button className="h-8" variant="default">Acessar { team.name_crew }</Button> */}
                                    {/* <Button className="h-8" variant="secondary">
                                        <Ellipsis className="" />
                                    </Button> */}
                                    <Button asChild variant="default" >
                                        {/* <Link href={ {pathname: "/dash", query: { idCrew: team.id_crew }} }>Acessar { team.name_crew }</Link> */}
                                        <Link href={ `/dash/${team.id_crew}` }>Acessar { team.name_crew }</Link>
                                    </Button>
                                    <Button asChild variant="secondary">
                                        <Link href="/dash">                                        
                                            <Ellipsis className="" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}