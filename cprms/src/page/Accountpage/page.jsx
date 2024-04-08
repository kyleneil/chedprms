import React, { useEffect, useState } from 'react'
import { makeRequest } from '../../axios'
import Modal from 'react-modal';
import { AiFillDelete } from "react-icons/ai";

function Accountpage() {

    const [AdminAccount, setAdminAccount] = useState({
        user_id: "",
        Password: "",
        Full_name: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminAccount(prev => ({
            ...prev, [name]: value
        }))
    }
    async function onSubmit(e) {
        e.preventDefault();

        try {
            const response = await makeRequest.post("/insertAdmin", AdminAccount)
            window.alert(response.data.message)
            getAccountApi();
            setModalIsOpen(false);
        } catch (error) {

        }
    }

    async function onDelete(user_id) {
        try {
            const response = await makeRequest.post("/deleteAccount", { user_id: user_id })
            window.alert(response.data.message)
            getAccountApi();
            setModalIsOpen(false);
        } catch (error) {

        }
    }

    // Modal style
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }
    };
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const [accountData, setAccountData] = useState()

    const getAccountApi = async () => {
        try {
            const res = await makeRequest.get("/account")
            setAccountData(res.data)
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        getAccountApi()
    }, [])

    console.log(accountData)
    return (
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24 h-screen">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">Accounts</h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={openModal}>Add Accounts</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Add Account Modal"
                            >
                                {/* Content for adding an account */}
                                <div>
                                    <h3 className="font-semibold text-base text-blueGray-700 mb-3 text-center">Add Accounts</h3>
                                    <form onSubmit={onSubmit}>
                                        <div className="w-full max-w-xs">
                                            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                <div className="mb-3">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                                        Name
                                                    </label>
                                                    <input onChange={handleChange} name='Full_name' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                                                </div>
                                                <div className="">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                                                        User ID
                                                    </label>
                                                    <input onChange={handleChange} name="user_id" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="id" type="text" placeholder="id" />
                                                </div>
                                                <div className="mb-6">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                        Password
                                                    </label>
                                                    <input onChange={handleChange} name='Password' className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*******" />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                        Add Account
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Your form or content for adding an account goes here */}
                                    <div className='flex justify-center'>

                                        <button onClick={closeModal} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Close Modal</button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                            <tr>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Name
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    User ID
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Password
                                </th>
                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {accountData?.map((data, key) => (

                                <tr key={key}>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        {data.Full_name}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        {data.user_id}
                                    </td>
                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {data.Password}
                                    </td>
                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <button onClick={() => { onDelete(data.user_id) }} className='' type='button'>
                                            <AiFillDelete size={"20px"} color='red' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Accountpage