import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Present Employees", "Absent Employees", ],
  datasets: [
    {
      label: "Attendence",
      data: [300, 50],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
      ],
      Legend:["a","b"],
      hoverOffset: 4,
    },
  ],
};

const UserChart = () => {
  return (
    <>
      <Pie data={data} />
      </>
  );
};

export default UserChart;
