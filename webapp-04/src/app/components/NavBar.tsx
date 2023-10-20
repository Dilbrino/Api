"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"
// import { useRouter } from "next/router";
// const NavBar = () => {
//   const router = useRouter();

//   const checkActivePath = (path: string) => {
//     return path === router.pathname;
//   };

const navigation = [
  { label: "HomeNext", href: "/", },
  { label: "Team", href: "/team",},

  { label: "Delete Team", href: "/Delete"}, 
]


export default function NavBar() {
    const pathname = usePathname()
  
    const checkActivePath = (path: string) => {


      return path === pathname
    }
  
    return (
      <nav className="mb-6 flex gap-4 text-lg">
        {navigation.map((item) => (
          <Link
            key={item.href} 
            href={item.href}
            
            className={checkActivePath(item.href) ? "px-2 font-bold" : "px-2"} >
            
            {item.label}
          </Link>
        
        )
        
        )

        }

      </nav>
    )
  }