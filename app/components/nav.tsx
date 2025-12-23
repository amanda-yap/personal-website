"use client"

import { useState } from "react"
import Link from 'next/link'


const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/books': {
    name: 'books',
  },
  '/movies': {
    name: 'movies',
  },
  '/music': {
    name: 'music',
  },
  '/projects': {
    name: 'projects',
  }
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
	<button
		onClick={() => setOpen(true)}
		className="lg:hidden relative mt-1 ml-auto text-neutral-700 text-3xl cursor-pointer"
		aria-label="Open navigation"
	>
		☰
	</button>
	<div
		onClick={() => setOpen(false)}
		className={`
			fixed inset-0 bg-black/40 z-40 transition-opacity
			${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
			lg:hidden
		`}
	/>
		<aside
			className={`
				fixed top-0 right-0 h-full w-64 bg-gray-50 z-50
				transform transition-transform duration-300 ease-in-out
				${open ? "translate-x-0" : "translate-x-full"}
				lg:static lg:translate-x-0 lg:w-auto lg:h-auto lg:bg-transparent
				lg:mb-10 lg:-ml-[14px]
			`}
		>
			<div className="p-4 lg:p-0 lg:sticky lg:top-20">
				<nav id="nav">
					<div className="flex flex-col lg:flex-row flex-wrap lg:ml-0">
						<button
							onClick={() => setOpen(false)}
							className="lg:hidden text-neutral-700 cursor-pointer ml-auto"
						>
							✕
						</button>
						{Object.entries(navItems).map(([path, { name }]) => (
						<Link
							key={path}
							href={path}
							onClick={() => setOpen(false)}
							className="transition-all hover:text-neutral-800 py-2 px-3 m-1"
						>
							{name}
						</Link>
						))}
					</div>
				</nav>
			</div>
    	</aside>
    </>
  )
}