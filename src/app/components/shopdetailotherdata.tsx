import { Heart } from "lucide-react"
import { GitCompareArrows } from 'lucide-react';
export default function Shopdetailsother (){
    return(
    <div className="mt-6 border-t border-t-slate-500 py-2">
        <div className="flex flex-row gap-6">
        <div>
            <h2 className="flex flex-row text-sm text-slate-500"> <span><Heart className="text-sm text-slate-500"/></span>Add to Wish List</h2>
        </div>
        <div>
            <h2 className="flex flex-row text-sm text-slate-500"> <span><GitCompareArrows className="text-slate-500 text-sm"/></span>Compare</h2>
        </div>
        </div>
        <h2 className="text-sm text-slate-500"> Category: Pizza</h2>
        <h2 className="text-sm text-slate-500"> Tag: Our Shop</h2>
        <img src="/Share.png" alt="share" className="w-44 mt-6" />
    </div>
    )
}