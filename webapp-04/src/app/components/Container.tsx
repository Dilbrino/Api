import { ReactNode } from "react";

export default function Conteiner({ children }: { children: ReactNode }) {

    return (
      <div className="mx-auto mt-4 w-full max-w-4xl">

        
        <div className="relative mt-4 overflow-x-auto">
          
          {children}
          
        </div>
      </div>
    )
  }