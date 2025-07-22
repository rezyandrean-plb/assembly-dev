"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4500 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 5500 },
  { name: "Jul", revenue: 7000 },
  { name: "Aug", revenue: 8000 },
  { name: "Sep", revenue: 7500 },
  { name: "Oct", revenue: 9000 },
  { name: "Nov", revenue: 8500 },
  { name: "Dec", revenue: 10000 },
];

export function DashboardChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E8EFFF" />

          <XAxis dataKey="name" stroke="#737687" />
          <YAxis stroke="#737687" />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <Card className="p-2 shadow-lg border-none">
                    <div className="text-sm font-medium">
                      {payload[0].payload.name}
                    </div>
                    <div className="text-sm text-[#123B79]">
                      Revenue: ${payload[0].value}
                    </div>
                  </Card>
                );
              }
              return null;
            }}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#123B79"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
