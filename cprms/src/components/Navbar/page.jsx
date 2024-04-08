import React from 'react'
import Logo from '/clogo.png'
import { makeRequest } from '../../axios'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const res = await makeRequest.get("/logout")
      navigate("/")
    } catch (error) {
      throw error
    }
  }

  return (
    <nav className="bg-blue-950 border-gray-200 dark:bg-gray-900">
      <div className="w-full flex items-center justify-between p-4">

        <div className='flex gap-3'>
          <img src={Logo} className="h-20" alt="CHED Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">CHED - PRMS</span>
        </div>

        <div className="hidden w-full md:block md:w-auto bg-transparent" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
            <li>
              <a href="/admin/promotional" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white hover:text-gray-400 md:p-0">Promotional</a>
            </li>
            <li>
              <a href="/admin/school" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 hover:text-gray-400">HEI</a>
            </li>
            <li>
              <a href="/admin/account" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 hover:text-gray-400">Account</a>
            </li>
            <li>
              <button type='button' onClick={handleLogout} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 hover:text-gray-400">Log out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar