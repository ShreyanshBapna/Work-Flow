import { useEffect, useState } from "react";
import { Button } from "./button";
import { Search, Plus} from "lucide-react";

import { EditIcon } from "../icons/editIcon";
import { DeleteIcon } from "../icons/deleteIcon";
import { CreateContentModel } from "./createEmployee";
import axios from "axios";
import { EditCardEmployee } from "./editCardEmployee";
import { Sidebar } from "./sidebar";

interface Employee {
  _id: string; // Assuming MongoDB _id
  name: string;
  email: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  userId?: string; // Optional, if it's stored but not always used on the frontend
}

export default function Employeeboard() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<Employee[]>([]);
  const [editCardOpen, setEditCardOpen] = useState({open: false, contentId: ""});

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/employee`, {
            headers: {
              "token": localStorage.getItem("token")
            }
      }).then((response) => {setContent(response.data.content)})
  },[])
  
  async function deleteEmployee(contentId: string) {
      console.log("hello");
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/employee/${contentId}`, {
            headers: {
              "token": localStorage.getItem("token")
            }
      })
      setContent((prev) => prev.filter(emp => emp._id !== contentId));
  }

  

  return (
    <div className="flex">
      <Sidebar/>
       <div className="flex-1 h-screen bg-[#E7ECFE]">
      {editCardOpen.open && <EditCardEmployee contentId={editCardOpen.contentId} open={editCardOpen.open} onClose={() => setEditCardOpen({open: false, contentId: ""})} />}
      <CreateContentModel open={open} onClose={() => {setOpen(!open)}} setContent={setContent}/>
     
      
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#567BFF]">Employees</h2>
          <div className="flex gap-3">
            <Button onClick={() => {setOpen(!open)}} StartIcon={<Plus/>} heading="Add an employee" />
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

        {/* Employee Table */}
        <div className="bg-white p-4 rounded-4xl shadow mx-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#656565] ">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Department</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {content.map((content, i) => (
                <tr key={i} className="hover:bg-gray-50 font-sans">
                  <td className="p-3">{content.name}</td>
                  <td className="p-3">{content.email}</td>
                  <td className="p-3">{content.role}</td>
                  <td className="p-3">{content.department}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 text-sm rounded-md ${content.status === "Active" ? "bg-green-100 text-green-700": "bg-red-100 text-red-700"}`}>
                      {content.status}
                    </span>
                  </td>
                  <td className="p-3 flex gap-2">
                    <button ><EditIcon onClick={() => setEditCardOpen({open: true, contentId: content._id})}/></button>
                    <button ><DeleteIcon onClick={() => deleteEmployee(content._id)}/></button>
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


