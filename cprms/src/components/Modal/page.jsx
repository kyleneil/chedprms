import React, { useEffect, useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import { makeRequest } from "../../axios";
function Modalpage({ state, setState, student }) {
  const [studentgrades, setStudentGrades] = useState();

  const fetchGrades = async () => {
    try {
      const res = await makeRequest.post("/getGrades", {
        id: student?.studentDetails.Student_No,
        acadYr: student?.acadYr.split(",")[1] || "",
      });
      setStudentGrades(res.data?.TranscriptCourse);
    } catch (error) {
      throw error;
    }
  };

  const groupedCourses = {};
  if (studentgrades) {
    studentgrades.forEach((course) => {
      if (!groupedCourses[course.Year]) {
        groupedCourses[course.Year] = {};
      }

      if (!groupedCourses[course.Year][course.Semester]) {
        groupedCourses[course.Year][course.Semester] = [];
      }
      groupedCourses[course.Year][course.Semester].push(course);
    });
  }

  useEffect(() => {
    fetchGrades(); // Call the fetchGrades function inside useEffect\\
  }, [student]);

  console.log(groupedCourses);

  return (
    <TEModal show={state} setShow={setState} scrollable>
      <TEModalDialog centered size="xl">
        <TEModalContent>
          <TEModalHeader>
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Transcript of Records
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => setState(false)}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </TEModalHeader>
          {/* <!--Modal body--> */}
          <TEModalBody>
            <div className="">
              <div className="flex justify-evenly gap-10">
                <div className="">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    Personal Information:
                  </h3>
                  <p>
                    <strong>Student ID:</strong>{" "}
                    {student?.studentDetails.Student_No}
                  </p>
                  <p>
                    <strong>Name:</strong> {student?.studentDetails.First_Name}{" "}
                    {student?.studentDetails.Middle_Name}{" "}
                    {student?.studentDetails.Last_Name}{" "}
                    {student?.studentDetails.Ext_Name}
                  </p>
                  <p>
                    <strong>Gender:</strong> {student?.studentDetails.Sex}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base text-blueGray-700">
                    Academic Information:
                  </h3>
                  <p>
                    <strong>Program:</strong>{" "}
                    {student?.studentDetails.Program_name}
                  </p>
                  <p>
                    <strong>Program Major:</strong>{" "}
                    {student?.studentDetails.Program_Major}
                  </p>
                </div>
              </div>

              {Object.entries(groupedCourses).map(([Year, Semesters]) => (
                <div key={Year}>
                  {Object.entries(Semesters).map(
                    ([Semester, studentgrades]) => (
                      <div className="w-full mb-5" key={Semester}>
                        <h3 className="mt-5 font-semibold text-base text-blueGray-700">
                          A.Y. : {Year} Semester : {Semester}
                        </h3>

                        <h3 className="mt-5 font-semibold text-base text-blueGray-700">
                          Grades:
                        </h3>
                        <div className="">
                          <table className="items-center bg-transparent w-full border-collapse">
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
                              {studentgrades?.map((data, key) => (
                                <tr key={key}>
                                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                    {data.Course_Code}
                                  </th>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    {data.Course_Description}
                                  </td>
                                  <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {data.Grades}
                                  </td>
                                  <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {data.Num_units}
                                  </td>
                                  <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {data.Remarks}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </TEModalBody>
          <TEModalFooter>
            <TERipple rippleColor="light">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                onClick={() => setState(false)}
              >
                Close
              </button>
            </TERipple>
          </TEModalFooter>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  );
}

export default Modalpage;
