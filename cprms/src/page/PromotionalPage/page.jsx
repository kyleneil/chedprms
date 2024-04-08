import React, { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import Modalpage from "../../components/Modal/page.jsx";

function PromotionalPage() {
  //states

  const [studentDetailModal, setstudentDetailModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [heiData, setHeiData] = useState([]);
  const [ayData, setAYData] = useState([]);

  const [studentData, setStudentData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [inputData, setinputData] = useState({
    heiid: "",
    academicyear: "",
    semester: "",
  });

  //handle functions

  const handleOpenModal = (student) => {
    setSelectedStudent({
      studentDetails: student,
      acadYr: inputData.academicyear,
    });
    setstudentDetailModal(true);
  };

  const onBlurFetch = () => {
    postStudent(inputData);
  };

  //api fetch function

  const getAYAPI = async () => {
    try {
      const res = await makeRequest.get("/getAY");
      setAYData(res.data);
    } catch (error) {
      throw error;
    }
  };

  const getHeiAPI = async () => {
    try {
      const res = await makeRequest.get("/getHEI");
      setHeiData(res.data);
    } catch (error) {
      throw error;
    }
  };

  const postStudent = async (inputs) => {
    try {
      const res = await makeRequest.post("/getStudent", inputs);
      setStudentData(res.data);
    } catch (error) {
      throw error;
    }
  };

  // useEffects

  useEffect(() => {
    getHeiAPI();
    getAYAPI();
  }, []);

  //filtering function

  const filteredStudentData = studentData.filter((student) => {
    const fullName = `${student.First_Name} ${student.Last_Name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div className="p-5">
        <Modalpage
          state={studentDetailModal}
          setState={setstudentDetailModal}
          student={selectedStudent}
        />

        <div className="flex gap-10">
          <div className="max-w my-3 flex flex-col gap-5">
            <div className="w-full">
              <label
                htmlFor="search"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Search
              </label>
              <input
                id="search"
                placeholder=""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="w-full mb-1">
              <label
                htmlFor="heiid"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                HEI
              </label>
              <select
                id="heiid"
                name="heiid"
                value={inputData.heiid}
                onBlur={onBlurFetch}
                onChange={(e) => {
                  setinputData((prev) => ({
                    ...prev,
                    heiid: e.target.value,
                  }));
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Choose an HEI</option>
                {heiData?.map((data, key) => (
                  <option key={key} value={data.HEI_ID}>
                    {data.Name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full mb-1">
              <label
                htmlFor="AY"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Academic Year
              </label>
              <select
                id="AY"
                name="academicyear"
                value={inputData.academicyear}
                onBlur={onBlurFetch}
                onChange={(e) => {
                  setinputData((prev) => ({
                    ...prev,
                    academicyear: e.target.value,
                  }));
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Choose an Academic Year</option>
                {ayData?.map((data, key) => (
                  <option key={key} value={[data.ACAD_ID, data.Year]}>
                    {data.Year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-5">
              {/* <div className="w-full">
              <label
                htmlFor="SEM"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Semester
              </label>
              <select
                id="SEM"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={inputData.semester}
                onChange={(e) => {
                  setinputData((prev) => ({
                    ...prev,
                    semester: e.target.value,
                  }));
                }}
              >
                <option defaultValue="">Choose a Semester</option>
                {semesterData?.map((data, key) => (
                  <option key={key} value={data.SEM_ID}>
                    {data.Semester}
                  </option>
                ))}
                </select>
              </div> */}
            </div>
          </div>

          <div className="max-h-screen max-w-full overflow-auto">
            <table className="w-full text-nowrap">
              <thead className="bg-gray-50 border-b-2 border-gray-200 ">
                <tr>
                  <th className="py-3 px-2 text-sm font-semibold tracking-wide text-left">
                    Student ID
                  </th>
                  <th className="py-3 px-2 text-sm font-semibold tracking-wide text-left">
                    Last Name
                  </th>
                  <th className="py-3 px-2 text-sm font-semibold tracking-wide text-left">
                    First Name
                  </th>
                  <th className="py-3 px-2 text-sm font-semibold tracking-wide text-left">
                    Middle Name
                  </th>
                  <th className="py-3 px-2 text-sm font-semibold tracking-wide text-left">
                    Ext. Name
                  </th>
                  <th className="py-3 px-2 text-sm font-semibold tracking-wide text-left">
                    Sex
                  </th>
                  <th className="py-3 px-2 text-sm font-semibold tracking-wide text-left">
                    Year Level
                  </th>
                  <th className="py-3 px-2 text-sm font-semibold tracking-wide text-left">
                    Program Name
                  </th>
                  <th className="py-3 px-2 text-sm font-semibold tracking-wide text-left">
                    Program Major
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudentData.map((data, key) => (
                  <tr
                    className="hover:bg-gray-300 cursor-pointer"
                    onClick={() => handleOpenModal(data)}
                    key={key}
                  >
                    <td className="pr-5 pl-2">{data.Student_No}</td>
                    <td className="pr-5 pl-2">{data.Last_Name}</td>
                    <td className="pr-5 pl-2">{data.First_Name}</td>
                    <td className="pr-5 pl-2">{data.Middle_Name}</td>
                    <td className="pr-5 pl-2">{data.Ext_Name}</td>
                    <td className="pr-5 pl-2">{data.Sex}</td>
                    <td className="pr-5 pl-2">{data.Year_Level}</td>
                    <td className="pr-5 pl-2">{data.Program_name}</td>
                    <td className="pr-5 pl-2">{data.Program_Major}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromotionalPage;
