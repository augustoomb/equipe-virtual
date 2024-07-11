import { auth, signOut } from "@/auth"
import { Button } from "@/app/components/ui/button"
import { User } from "lucide-react"

export default async function Logout() {
    const session = await auth()

    if (!session?.user) return null

    return(
        <div className="flex h-12 flex-row w-full justify-center hover:bg-slate-100">
            {
                session !== null ? (
                    
                    <form className=""
                        action={async () => {
                            "use server"
                            await signOut()
                        }}
                        >
                        <Button variant={"link"} type="submit">
                            <User className="mr-2 h-4 w-4" /> { session.user.name }
                        </Button>
                    </form>
                    
                ) :
                (
                    <h4>Não logado</h4>
                )
            }
        </div>
    )
}