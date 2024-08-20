import React from 'react'
import { ReactNode } from 'react'

const AuthContainer = ({ children }: { children: ReactNode }) => {
    return (
        <section className='flex justify-center'>
            <div className='w-[400px] h-screen flex flex-col'>
                {children}
            </div>
        </section>
    )
}
export default AuthContainer