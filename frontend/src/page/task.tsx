import { useEffect, useState } from "react";
import { Button } from "../component/button";
import { Search, Plus} from "lucide-react";
import { DeleteIcon } from "../icons/deleteIcon";
import axios from "axios";
import { Sidebar } from "../component/sidebar";
import { CreateTaskModel } from "../component/createTask";
import { CompletedSign } from "../icons/completedSignIcon";


interface Task {
  _id: string; // Assuming MongoDB _id
  name: string,
  status: "Pending" | "In Progress" | "Completed",
  task: string,
  priority:"High" | "Medium" | "Low",
  employeeId: string,
  dueDate: string,
  userId: string,
  department: string
}

interface Employee {
  _id: string; // Assuming MongoDB _id
  name: string;
  email: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  userId?: string; // Optional, if it's stored but not always used on the frontend
}

const priorityColor : {
  "High": string,
  "Medium": string,
  "Low": string
} = {
  "High": "bg-red-500",
  "Medium": "bg-black",
  "Low": "bg-gray-200"
}

const statusColor : {
  "Pending": string, 
  "In Progress": string, 
  "Completed": string
} = {
  "Pending": "bg-red-500", 
  "In Progress": "bg-black", 
  "Completed": "bg-black"
}

export default function Taskboard() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [Task, setTask] = useState<Task[]>([]);
  const [employee, setEmployee] = useState<Employee[]>([]);
  
  async function deleteTask(taskId: string) {

      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/task/${taskId}`, {
            headers: {
              "token": localStorage.getItem("token")
            }
      })
      setTask((prev) => prev.filter(emp => emp._id !== taskId));
  }

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/employee`, {
            headers: {
              "token": localStorage.getItem("token")
            }
      }).then((response) => {setEmployee(response.data.content)})
  },[])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/task`, {
            headers: {
              "token": localStorage.getItem("token")
            }
      }).then((response) => {setTask(response.data.content)})
  },[])
  
  return (
    <div className="flex">
      <Sidebar/>
       <div className="flex-1 h-screen bg-[#E7ECFE]">
      <CreateTaskModel employee={employee} open={open} onClose={() => {setOpen(!open)}} />
      
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#567BFF]">Tasks</h2>
          <div className="flex gap-3">
            <Button onClick={() => {setOpen((e) => (!e))}} StartIcon={<Plus/>} heading="Add Task" />
            <div className="bg-white flex items-center border border-gray-300 rounded-md px-2">
              <Search className="text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search employees"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 outline-none"
              />
            </div>
          </div>
        </header>

        <div className="bg-white p-4 rounded-4xl shadow mx-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#656565] ">
                <th className="p-3">Task</th>
                <th className="p-3">Name</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Status</th>
                <th className="p-3">Due Date</th>
                <th className="p-3">Department</th>
                <th className="p-3">Active</th>
              </tr>
            </thead>
            <tbody>
              {Task.map((Task, i) => (
                <tr key={i} className="hover:bg-gray-50 font-sans">
                  <td className="p-3">{Task.task}</td>
                  <td className="p-3">{Task.name}</td>
                  <td className={`p-3 text-white flex`}>
                    <span className={`${priorityColor[Task.priority]} p-1 rounded-2xl`}>{Task.priority}</span>
                  </td>
                  <td className={`p-3 text-white`}>
                    <span className={`${statusColor[Task.status]} p-1 rounded-2xl`}>{Task.status}</span>
                  </td>                  
                  <td className="p-3">{Task.dueDate}</td>
                  <td className="p-3">{Task.department}</td>
                  <td className="p-3 flex gap-2">
                    <button ><CompletedSign onClick={() => {}}/></button>
                    <button ><DeleteIcon onClick={() => {deleteTask(Task._id)}}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
    </div>
   
  );
}


