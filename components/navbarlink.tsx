import React, { ReactNode, Props, ComponentPropsWithoutRef } from "react"
import Link from 'next/link'

export interface NavbarLinkProps {
    className?: string;
    dest?: string;
}

export default function Navbarlink({ className, dest}: NavbarLinkProps) {
    return (
        <>
            <li className="nav-item">
                <Link href={dest}>
                    <a className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ${className ?? ""}`}>Just another link</a>
                </Link>
            </li>
        </>
    );
}