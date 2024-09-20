import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

export const data = [
  { name: "Sales", value: 700 },
  { name: "Hr", value: 400 },
  { name: "Finance", value: 300 },
  { name: "IT", value: 200 },
];

export const COLORS = ["#176B87", "#86B6F6", "#F4D35E", "#C71026"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <rect
        rx="5"
        ry="5"
        fill="white"
        x={x}
        y={y}
        textAnchor="m"
        dominantBaseline="middle"
      ></rect>
      <text
        style={{ fontWeight: "bold", fontSize: "13.09px" }}
        x={x}
        y={y}
        fill={COLORS[index % COLORS.length]}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    </>
  );
};
// hhh

const TeamPerformanceRatingGraph = () => {
  return (
    <div className="min-w-[100%] h-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={170}
            dataKey="value"
            style={{ outline: "none" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TeamPerformanceRatingGraph;
