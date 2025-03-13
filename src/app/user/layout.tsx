import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className="max-w-[1124px] mx-auto px-4">
                {children}
            </div>
            <Footer />
        </div>
    )
}