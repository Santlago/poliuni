import { Star } from 'lucide-react'
import { ThemeController } from '../theme-controller'
import Link from 'next/link'

export function Navbar() {
  return (
    <div className="navbar bg-base-200 drop-shadow-lg z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm">
            <li><Link href='/aulas'>AULAS</Link></li>
            <li><Link href='/'>QUEM SOMOS</Link></li>
            <li><Link href='/'>FAÇA PARTE</Link></li>
          </ul>
        </div>
        <Link href='/'>
          <div className="btn btn-ghost text-xl text-primary"><Star color='currentColor'/>PoliUni</div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href='/aulas'>AULAS</Link></li>
          <li><Link href='/'>QUEM SOMOS</Link></li>
          <li><Link href='/'>FAÇA PARTE</Link></li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <ThemeController />
        <button className='btn btn-primary'>Sign In</button>
        {/* <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}
