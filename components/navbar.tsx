"use client"

import {Sparkles} from "lucide-react"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import { MobileSiderbar } from "@/components/mobile-sidbar"

const font = Poppins({
    weight: "600",
    subsets: ['latin']
})
export const Navbar = () =>{
    return (
        <div className="fixed w-full z-50 flex justify-between item-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className="flex item-center">
                <MobileSiderbar/>
                <Link href="/">
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold x-primary",
                        font.className
                        )}>
                        comp.ai 
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant= "premium" size="sm">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                </Button>
                <UserButton/>
                <ModeToggle/>
            </div>
        </div>
    )
}