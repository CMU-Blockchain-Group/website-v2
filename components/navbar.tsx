import React, { ReactNode, Props, ComponentPropsWithoutRef } from "react"
import Link from 'next/link'
import Navbarlink from "./navbarlink"
export interface NavbarProps {
    children?: ReactNode;
    className?: string;
}

export function Navbar({children,className}: NavbarProps) {
    return (
        <div className="fixed w-full z-40">
          <nav className="sticky top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500 mb-3 shadow-lg z-40">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                  <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                href="#pablo"
                  >
                pink Tailwind Starter Kit
              </a>
                <i className="fas fa-bars"></i>
                  </div>
                  <div
              className={
                "lg:flex flex-grow items-center"
              }
              id="example-navbar-danger"
            >
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                      <Navbarlink dest="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                      <Navbarlink dest="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                  </ul>
                  {children}
                  </div>
              </div>
          </nav>
        </div>
    )
}