"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { CommunityNodes } from "@/components/communitynodes"

export function MainNav() {
  return (
    <div className="flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Community Nodes</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-full">
                <Link
                  href="/about/communitynodes"
                  className={cn(
                    "block bg-gray-200 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  )}
                >
                  <div className="text-sm font-medium leading-none text-center h3">About Community Nodes</div>
                </Link>
              </div>

              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {CommunityNodes.slice(0,6).map((node) => (
                  <li key={node.id}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={`/nodes/${node.id}`}
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        
                      )}
                    >
                      <div className="text-sm font-medium leading-none">{node.name}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{node.description}</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                ))}
              </ul>
              <div className="p-4 w-full">
                <Link
                  href="/nodes"
                  className={cn(
                    "block bg-gray-100 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  )}
                >
                  <div className="text-sm font-medium leading-none text-center h3">More Nodes</div>
                </Link>
                </div>
            </NavigationMenuContent>

              
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://meshtastic.ellahin.com/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Getting Started guide</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}


