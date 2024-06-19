'use client'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className="flex flex-row justify-center py-4 bg-gray-100 shadow-md">
            <div className="flex flex-row w-3/4 justify-between items-center">
                <Link href={'/'}>
                    <div className="flex flex-row gap-4 items-center">
                        <img src="/inslogo.png" alt="İnşaat Logo" className="h-12 w-12" />
                        <h1 className="font-bold text-3xl text-gray-800">19 İnşaat</h1>
                    </div>
                </Link>
                <div id="links" className="flex flex-row gap-8">
                    <Link href={'/'}>
                        Ana Sayfa
                    </Link>
                    <Link href={'/services'}>
                        Hizmetler
                    </Link>
                    <Link href={'/projects'}>
                        Projeler
                    </Link>
                    <Link href={'/contact'}>
                        İletişim
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
