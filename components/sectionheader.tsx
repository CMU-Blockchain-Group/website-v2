import React, { ReactNode, Props, ComponentPropsWithoutRef } from "react"

export interface SectionHeaderProps {
    children?: ReactNode;
    className?: string;
    headerName?: string;
}

export function Sectionheader ({children,className,headerName}: SectionHeaderProps){
    return (
        <div className={`flex flex-row justify-center bg-pink-500 h-32 text-7xl lg:text-9x ${className ?? ""}`}>
           <div className="flex flex-col justify-center">
               {headerName ? headerName : "Default Header"}
            </div>
        </div>
    );  
}