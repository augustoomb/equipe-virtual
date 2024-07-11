import LoginForm from "@/app/components/register-login/login-form"
import { InfoCard } from "../components/register-login/info-card"
import Image from "next/image"
import Logo from "@/public/logo.png"
import TermsUse from "@/app/components/register-login/terms-use"

export default async function LoginPage() {    

    return(
        <main className="flex h-screen">            
            <section className="sm:w-full lg:w-1/2 flex flex-col items-center justify-center">
                <article className="w-2/4 h-5/6 flex flex-col justify-around items-center">
                    <div className="flex flex-col items-center justify-center">
                        <Image 
                            src={ Logo }
                            width={60}
                            height={60}
                            alt="Logo do software Equipe Virtual"
                        />
                        <h1 className="mt-4 text-2xl font-bold">Equipe Virtual</h1>
                        <span className="text-xs font-normal text-slate-500">Login</span>    
                    </div>                
                    <LoginForm />
                    <TermsUse />
                </article>
            </section>
            <aside className="hidden lg:w-1/2 lg:flex items-center justify-center bg-black">
                <InfoCard />
            </aside>
        </main>
    )
}
