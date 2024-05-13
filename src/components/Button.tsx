import React, { type ReactNode } from 'react';

type Button={
  handleSubmit: () =>void;
  children:ReactNode;
}

export default function Button({handleSubmit,children}: Button) {

  return (
    <button onClick={handleSubmit} className=" rounded-full text-lg tracking-widest font-bold uppercase max-w-fit hover:bg-slate-800 transition-all focus:outline-none focus-visible:ring-4 ring-offset-2 ring-slate-950 ring-offset-slate-50 px-6 py-2 bg-slate-950 text-slate-50 flex items-center gap-1.5">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="24"
      height="20"
    >
      <path
        fill="#66bb6a"
        d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"
      />
    </svg>      
    {children}
    </button>
  );
}
