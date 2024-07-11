'use client';

import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Button } from "@/app/components/ui/button"

import Link from 'next/link'
import { useFormState, useFormStatus } from 'react-dom';

import { login } from '@/app/lib/actions';

export default function LoginForm() {
    
    const loginInitialState = {
        message: '',
        errors: {
         email: '',
         password: '',
         credentials: '',
         unknown: '',
        },
    };

    const [formState, formAction] = useFormState(login, loginInitialState);

    return(
        <form action={formAction} className="flex w-full justify-center">
            <div className="flex flex-col w-full max-w-sm">
                <div className="flex flex-col w-full">
                    <div className="pb-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input type="email" placeholder="fulano@mail.com" id="email" name="email" />
                    </div>
                    <div className="pb-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" placeholder="*******" id="password" name="password" />
                    </div>
                    <span className="pb-2 text-sm text-slate-500 self-end underline">Esqueci a senha</span>                     
                    <LoginButton />
                    <p className="pt-2 text-sm self-center text-center text-slate-500">
                        Não possui conta?&nbsp;
                        <Link href="/register">
                            <span className="hover:font-bold underline">Experimente</span>
                        </Link> 
                        {formState.message && (
                            <>
                                {Object.entries(formState.errors).map(([key, error]) => (
                                    error && <p key={key} className="text-sm text-red-500">{error}</p>
                                ))}                                
                            </>
                        )}
                    </p>
                    
                </div>                
            </div>  
        </form>
    )
}

function LoginButton() {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} type="submit">Entrar</Button>
    )
}