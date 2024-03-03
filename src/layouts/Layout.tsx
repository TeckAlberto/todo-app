import { Link, Outlet } from "react-router-dom"
import profileImage from '../assets/profile.jpg'
import { useState } from "react";

const list: Array<string> = [
  'Fruits',
  'Vegetables',
  'Toys'
];

export default function Layout() {
    const [ showMenu, setUseMenu ] = useState(true);
  
    const clickHandleMenu = () => {
      setUseMenu(!showMenu);
    }

    return (
      <main className="md:flex">
        <aside className="w-[300px] max-w-[300px] min-h-screen bg-[#345084] pl-2 pt-2">
          <section className="flex py-2 justify-evenly">
            <img
              src={profileImage}
              alt="profile-image"
              className="w-12 h-12 rounded-full"
            />

            <strong className="self-center text-white">
              Alberto Gutierrez
            </strong>

            <button onClick={clickHandleMenu}>
              {showMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#161a50"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#161a50"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </section>

          <form className="my-4" action="">
            <input
              type="search"
              id="search"
              name="q"
              autoComplete="off"
              placeholder="Search"
              className="placeholder:text-gray-200 text-center py-1 placeholder:text-[18px] placeholder:text-md rounded-md bg-[#7595ff] w-[255px]"
            />
            <button type="submit"></button>
          </form>

          <nav className="flex flex-col space-y-8">
            <Link
              to="/my-day"
              className="text-lg font-bold text-white hover:text-[#9cbcff] transition-all ease-out"
            >
              My day
            </Link>
            <Link
              to="/important"
              className="text-lg font-bold text-white hover:text-[#9cbcff] transition-all ease-out"
            >
              Important
            </Link>
            <Link
              to="/planned"
              className="text-lg font-bold text-white hover:text-[#9cbcff] transition-all ease-out"
            >
              Planned
            </Link>

            <div className="w-[280px] h-1 rounded-lg bg-[#7595ff]"></div>

            { list.length > 0 ? (
              list.map( (title: string, index: number) => (
                <Link 
                  to='#' 
                  key={index}
                  className="text-lg font-bold text-white hover:text-[#9cbcff] transition-all ease-out"
                >
                  {title}
                </Link>
              ))
            ) : (
              null
            )}

            <form action="">
              <button
                className="text-[18px] text-gray-200 transition-all ease-in-out hover:text-zinc-700"
                type="submit"
              >
                Crear nueva lista
              </button>
            </form>
          </nav>
        </aside>

        <Outlet />
      </main>
    );
}
