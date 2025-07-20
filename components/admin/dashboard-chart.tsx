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
    <div className="h-[300px] w-full" data-oid="-hpu9pe">
      <ResponsiveContainer width="100%" height="100%" data-oid="v45:fvy">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data-oid="soxnbz9"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E8EFFF"
            data-oid="n7bifwi"
          />
          <XAxis dataKey="name" stroke="#737687" data-oid="j2n6q02" />
          <YAxis stroke="#737687" data-oid="yv-i:2b" />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <Card
                    className="p-2 shadow-lg border-none"
                    data-oid="5hijgn5"
                  >
                    <div className="text-sm font-medium" data-oid="vitez.r">
                      {payload[0].payload.name}
                    </div>
                    <div className="text-sm text-[#123B79]" data-oid="a__yee3">
                      Revenue: ${payload[0].value}
                    </div>
                  </Card>
                );
              }
              return null;
            }}
            data-oid="y31:nca"
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#123B79"
            strokeWidth={2}
            activeDot={{ r: 8 }}
            data-oid="::xd285"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
