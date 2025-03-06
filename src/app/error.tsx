"use client";

import { useEffect } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error("Xatolik yuz berdi:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-2xl font-bold text-red-600">Xatolik yuz berdi!</h1>
            <p className="text-gray-600">{error.message}</p>
            <button
                onClick={() => reset()} // Sahifani qayta yuklash
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Qayta urinish
            </button>
        </div>
    );
}
