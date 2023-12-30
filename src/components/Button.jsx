import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ className }) {
    const [loading, setLoading] = useState();

    return (
        <button
            className={twMerge("bg-gray-500 p-4 text-2xl", className, loading && "bg-blue-600")}
            onClick={() => setLoading((l) => !l)}
        >
            Be a Good Human
        </button>
    )
}