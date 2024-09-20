import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Finance",
    Voluntory: 20,
    Involuntory: 30,
    Retired: 24,
  },
  {
    name: "Hr",
    Voluntory: 24,
    Involuntory: 13,
    Retired: 22,
  },
  {
    name: "Sales",
    Voluntory: 20,
    Involuntory: 25,
    Retired: 30,
  },
  {
    name: "IT",
    Voluntory: 20,
    Involuntory: 28,
    Retired: 30,
  },
];

export const graphLegend = [
  {
    title: "Voluntory",
    color: "#176B87",
  },
  {
    title: "Involuntory",
    color: "#86B6F6",
  },
  {
    title: "Hired",
    color: "#F4D35E",
  },
];

const EmployeeTurnOverGraph = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart barCategoryGap={20} data={data}>
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={{ stroke: "black" }}
            tick={{ fill: "black", fontSize: "13.96px", fontWeight: "500" }}
          />
          <Bar dataKey="Voluntory" fill="#176B87" />
          <Bar dataKey="Involuntory" fill="#86B6F6" />
          <Bar dataKey="Retired" fill="#F4D35E" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default EmployeeTurnOverGraph;
