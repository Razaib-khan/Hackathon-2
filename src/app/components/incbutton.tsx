"use client"
import { useState } from "react"
import { Plus, Minus } from 'lucide-react';

export default function Incbutton() {
    const [count, setCount] = useState(1);

    const isMinusDisabled = count <= 1;

    return (
        <div className="flex flex-row">
            <button
                onClick={() => setCount(count - 1)}
                className={`bg-transparent border border-slate-400 p-1 ${isMinusDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isMinusDisabled}
            >
                <Minus className="text-sm" /> 
            </button>
            <div className="bg-transparent p-[6px] w-[33px] border border-slate-400 h-[39.5px]">
                <span className="flex justify-center items-center text-center">{count}</span>
            </div>
            <button
                onClick={() => setCount(count + 1)}
                className="bg-transparent border border-slate-400 p-1"
            >
                <Plus className="text" />
            </button>
        </div>
    );
}