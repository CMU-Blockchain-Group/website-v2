import React, { ReactNode, Props, ComponentPropsWithoutRef } from "react"
import Image from 'next/image'

export interface CardProps{
    children?: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={`p-4 flex flex-row justify-center bg-gray-50 shadow rounded ${className ?? ""}`}>
           {children}
        </div>
    );
    
}

export interface CardContentProps{
    title: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
}

export function CardContent({ title, children, footer }: CardContentProps) {
    return (
        <div className={"flex flex-col justify-between"}>
            <div className="mb-4">{title}</div>
            <div className="mb-4">{children}</div>
            <div>{footer ?? <></>}</div>
        </div>
    )
}