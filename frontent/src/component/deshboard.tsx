
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { Card } from "./card";


const stats = [
  { title: "Total Employees", value: 142, change: "+12% from last month", color: "text-blue-500" },
  { title: "Active Tasks", value: 87, change: "-3% from last week", color: "text-red-500" },
  { title: "Interns", value: 24, change: "+15% from last week", color: "text-green-500" },
];

const data = [
  { name: "Jan", activity: 60 },
  { name: "Feb", activity: 80 },
  { name: "Mar", activity: 65 },
  { name: "Apr", activity: 70 },
  { name: "May", activity: 75 },
  { name: "Jun", activity: 68 },
  { name: "Jul", activity: 72 },
  { name: "Aug", activity: 95 },
  { name: "Sep", activity: 66 },
  { name: "Oct", activity: 74 },
  { name: "Nov", activity: 60 },
  { name: "Dec", activity: 69 },
];

export function Dashboard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex h-screen w-full bg-[#E7ECFE] p-6">

      <main className="flex-1 p-6 overflow-y-auto">

        <div className="grid grid-cols-3 gap-12 mb-12">
          {stats.map((s, i) => (
            <Card key={i} title={s.title} value={s.value} change={s.change}/>
          ))}
        </div>

        {/* Activity + Calendar */}
        <div className="grid grid-cols-3 gap-12 rounded-3xl">
          <div className="bg-white p-4 rounded-xl shadow col-span-2">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Employee Activity</p>
              <p className="text-sm text-gray-500">Quarterly</p>
            </div>
            <div className="">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="activity" fill="#F2EFFF" className="hover:fill-[#5932EA]" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            </div>
          
          </div >
          <div className="bg-white p-4 rounded-3xl shadow ">
            <div className="mb-12">
                <p className="font-semibold">Attendance Overview</p>
            </div>
            <div className="flex justify-center items-center flex-col rounded-3xl border-transparent">
                <Calendar className="rounded-xl" value={date} onChange={(newDate) => setDate(newDate as Date)} />
            </div>
          </div>
        
        </div>
      </main>
    </div>
  );
}


