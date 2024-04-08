import React, { useState } from 'react'
import Logo from '/clogo.png'
import BackgroundImg from '/background.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { makeRequest } from '../../axios'
const Loginpage = () => {

  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    user_id: "",
    Password: ""
  });

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await makeRequest.post("/login", credentials)
      navigate("/admin/promotional")
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev, [name]: value
    }))
  }
  console.log(credentials);


  return (
    <div
      className="relative h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* content */}
      <div className='h-full overflow-auto'>
        <div className="relative flex flex-col items-center justify-center p-9 z-10 ">
          <div className="mt-3">
            <div className="flex flex-col md:flex-row md:items-center text-2xl font-semibold text-white">
              <img
                className="h-[200px] w-[200px] md:mr-6"
                alt="ched-logo"
                src={Logo}
              />
              <div>
                <span className="block text-center md:text-left">
                  Commission on Higher Education Region - 10
                </span>
                <span className="block mt-7 text-5xl font-bold text-center md:text-left">
                  Promotional Report Management System
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-opacity-40 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded shadow-lg w-80 my-2">
            <div className="items-center flex mb-4 gap-2">
              {/* <BsFillPersonFill size="25" /> */}
              <h1 className="text-3xl font-semibold ">User Login</h1>
            </div>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  User ID
                </label>
                <input
                  required
                  type="text"
                  id="userid"
                  name="user_id"
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                  placeholder="User ID"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Password
                </label>
                <input
                  required
                  type="Password"
                  id="Password"
                  name="Password"
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                  placeholder="********"
                />
              </div>
              <div className='mb-4 text-sm font-medium text-blue-500 hover:underline'>
                <Link to="/hei">
                  <p >
                    Are you an HEI?
                  </p>
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 text-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Overlay with 50% opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  )
}

export default Loginpage