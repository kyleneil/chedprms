import React from 'react';
import { useLocation } from 'react-router-dom';

function StudentDetailpage() {
  const location = useLocation();
  const { student } = location.state || {};

  if (!student) {
    return <div>Error: Student data not found.</div>; // or Redirect to an error page
  }

  return (

    <div>
      <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24 h-screen">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="mb-5 font-semibold text-base text-blueGray-700">Transcript of Records</h3>
                <div>
                  <h3 className="font-semibold text-base text-blueGray-700">Personal Information:</h3>
                  <p><strong>Student ID:</strong> {student.Student_No}</p>
                  <p><strong>Name:</strong> {student.First_Name} {student.Middle_Name} {student.Last_Name} {student.Ext_Name}</p>
                  <p><strong>Gender:</strong> {student.Sex}</p>
                </div>
                <div>
                  <h3 className="mt-5 font-semibold text-base text-blueGray-700">Academic Information:</h3>
                  <p><strong>Year Level:</strong> {student.Year_Level}</p>
                  <p><strong>Program:</strong> {student.Program_name}</p>
                  <p><strong>Program Major:</strong> {student.Program_Major}</p>
                </div>
                <h3 className="mt-5 font-semibold text-base text-blueGray-700">Grades:</h3>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Course Code
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Course Title
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Grade
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Units
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Remarks
                  </th>
                </tr>
              </thead>

              <tbody>
                {student.grades?.map((grade, index) => (
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      {grade.course_code}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {course.course_title}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {grade.grade}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {course.Num_units}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {grade.Remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailpage;
