import React from 'react'
import Logo from '/clogo.png'
import BackgroundImg from '/background.jpg'
import { Link } from 'react-router-dom'

function HEIpage() {
    return (
        <div
            className="relative bg-cover bg-center"
            style={{
                backgroundImage: `url(${BackgroundImg})`,
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay with 50% opacity */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* content */}
            <div className="relative flex flex-col items-center justify-center p-9 z-10">
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
                        <h1 className="text-3xl font-semibold ">HEI Form</h1>
                    </div>
                    <form>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-700">
                                HEI ID
                            </label>
                            <input
                                required
                                type="heiid"
                                id="heiid"
                                name="heiid"
                                className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                                placeholder="HEI ID"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-700">
                                HEI Name
                            </label>
                            <input
                                required
                                type="name"
                                id="name"
                                name="name"
                                className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium text-gray-700">
                                HEI Address
                            </label>
                            <input
                                required
                                type="address"
                                id="address"
                                name="address"
                                className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                                placeholder="Address"
                            />
                        </div>
                        <label className="block text-lg font-medium text-gray-700" for="file_input">Upload file</label>
                        <input className="block w-full my-4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file"></input>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 text-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>



    )
}

export default HEIpage