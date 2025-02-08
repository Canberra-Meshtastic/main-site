"use client"

import * as React from "react"
import Link from "next/link"
import { MainNav } from "./ui/navigation-items"
import { Button } from "./ui/button"

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between w-full p-3">
        <Link href="/" className="flex justify-self-start items-center space-x-2">
          <span className="h-6 w-6 rounded-full bg-primary" />
          <span className="hidden font-bold sm:inline-block">Canberra Meshtastic</span>
        </Link>
        <div className="self-center">
          <MainNav />
        </div>
        <div className="flex items-center">
          <Link href="https://discord.gg/7H7dmc5tzb">
            <Button variant="default" size="sm" className="rounded">
              Join On Discord
            </Button>
          </Link>

        </div>
      </div>
    </header>
  )
}


