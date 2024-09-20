import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Legend,
  YAxis,
} from "recharts";
import { salesData } from "./GraphData";
const halfsales = salesData.slice(6, 12);

const Graph2 = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart barCategoryGap={25} data={halfsales}>
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={{ stroke: "#ECEEF6" }}
          tick={{ fill: "black", fontSize: "13.96px", fontWeight: "500" }}
        />
        <YAxis
          tickLine={false}
          tick={false}
          width={1}
          axisLine={{ stroke: "#ECEEF6" }}
        />
        <Legend />
        <Bar dataKey="Employees working" fill="#B4D4FF" />
        <Bar dataKey="Employees on leave" fill="#F4D35E" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph2;
