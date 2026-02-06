import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";

const COLORS = {
  Active: "#4CAF50",
  Pending: "#FF9800",
  Inactive: "#9E9E9E"
};

const Charts = ({ data, selectedProject }) => {
  const chartData = [
    { name: "Active", value: data.filter(d => d.status === "Active").length },
    { name: "Pending", value: data.filter(d => d.status === "Pending").length },
    { name: "Inactive", value: data.filter(d => d.status === "Inactive").length }
  ];
const selectedStatus = selectedProject?.status;

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      {/* Donut Chart */}
      <Card sx={{ flex: 1, borderRadius: 2 }}>
        <CardContent>
          <Typography fontWeight={600} mb={2}>
            Projects by Status
          </Typography>

          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
            <Pie
  data={chartData}
  dataKey="value"
  innerRadius={60}
  outerRadius={90}
>
  {chartData.map((entry, index) => (
    <Cell
      key={index}
      fill={COLORS[entry.name]}
      opacity={
        !selectedStatus || selectedStatus === entry.name
          ? 1
          : 0.3
      }
    />
  ))}
</Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Bar Chart */}
      <Card sx={{ flex: 1, borderRadius: 2 }}>
        <CardContent>
          <Typography fontWeight={600} mb={2}>
            Status Distribution
          </Typography>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
             <Bar dataKey="value">
  {chartData.map((entry, index) => (
    <Cell
      key={index}
      fill={COLORS[entry.name]}
      opacity={
        !selectedStatus || selectedStatus === entry.name
          ? 1
          : 0.3
      }
    />
  ))}
</Bar>

            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Charts;
