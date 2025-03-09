"use client"
import { ThemeProvider } from "next-themes"
import React from "react"

export default function themeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </ThemeProvider>
    )
}