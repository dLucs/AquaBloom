import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type LinkProps={
    href: string;
    classes?: string;
    children: ReactNode;
}

const Link = ({href, children,classes,...rest}:LinkProps) => {
    return ( 
        <a href={href} className={twMerge("text-lg tracking-widest font-bold uppercase max-w-fit hover:bg-slate-800 transition-all focus:outline-none focus-visible:ring-4 ring-offset-2 ring-slate-950 ring-offset-slate-50 px-6 py-2 bg-slate-950 text-slate-50 flex items-center gap-1.5", classes)} {...rest}>{children}</a>
     );
}
 
export default Link;