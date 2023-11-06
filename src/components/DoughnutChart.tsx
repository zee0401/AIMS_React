import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Leaves", "Leaves Pending", ],
  datasets: [
    {
      label: "Attendence",
      data: [30, 50],
      backgroundColor: [
        "rgb(170, 237, 33)",
        "rgb(255, 214, 71)",
      ],
      hoverOffset: 4,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <>
      <Doughnut data={data}/>
      </>
  );
};

export default DoughnutChart;
