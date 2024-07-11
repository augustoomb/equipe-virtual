import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Button } from "@/app/components/ui/button"

import Link from 'next/link'

export default function RegisterForm() {
    return(
        <form className="flex w-full justify-center">
            <div className="flex flex-col w-full max-w-sm">
                <div className="flex flex-col w-full">
                    <div className="pb-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input type="text" placeholder="Fulano" id="name"/>
                    </div>
                    <div className="pb-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input type="email" placeholder="fulano@mail.com" id="email"/>
                    </div>
                    <div className="pb-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" placeholder="*******" id="password"/>
                    </div>
                    <div className="pb-2">
                        <Label htmlFor="repassword">Confirme a Senha</Label>
                        <Input type="password" placeholder="*******" id="repassword"/>
                    </div>
                    <Button type="submit">Cadastrar</Button>
                    <p className="pt-2 text-sm self-center text-center text-slate-500">                        
                        Já possui conta?&nbsp;
                        <Link href="/login">
                            <span className="hover:font-bold underline">Entrar</span>
                        </Link>                       
                    </p>
                </div>                
            </div>
        </form>
    )
}