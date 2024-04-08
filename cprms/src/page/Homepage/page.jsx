import React from "react";
import { TEChart } from "tw-elements-react";

function Homepage() {
  return (
    <div className="w-[600px] h-[600px] mt-10 ml-10 flex">
      <TEChart
        type="doughnut"
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday ",
          ],
          datasets: [
            {
              label: "Traffic",
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
              backgroundColor: [
                "rgba(63, 81, 181, 0.5)",
                "rgba(77, 182, 172, 0.5)",
                "rgba(66, 133, 244, 0.5)",
                "rgba(156, 39, 176, 0.5)",
                "rgba(233, 30, 99, 0.5)",
                "rgba(66, 73, 244, 0.4)",
                "rgba(66, 133, 244, 0.2)",
              ],
            },
          ],
        }}
      />
      <div>
      <TEChart
      type="bar"
      data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Traffic",
            data: [30, 15, 62, 65, 61, 6],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "green",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#4285F4",
            },
          },
          y: {
            ticks: {
              color: "#f44242",
            },
          },
        },
      }}
    />
      </div>
    </div>
  );
}

export default Homepage;
