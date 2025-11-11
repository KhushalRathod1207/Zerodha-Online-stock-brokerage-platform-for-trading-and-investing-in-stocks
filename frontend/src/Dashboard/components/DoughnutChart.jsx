import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ data }) => (
    <div className="bg-white p-6 rounded-2xl shadow-md flex justify-center items-center">
        <div className="w-64 h-64">
            <Doughnut data={data} />
        </div>
    </div>
);
