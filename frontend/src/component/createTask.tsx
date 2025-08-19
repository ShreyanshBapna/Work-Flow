import { useRef } from "react";
import { Button } from "./button";
import { ManLogo } from "../logo/menlogo";
import axios from "axios";

const department = ["Engineering", "Operations", "Human Resources", "Manning", "HSEQ", "IT", "Maintenance"]
const priorityOptions = ["High", "Medium", "Low"];
const statusOptions = ["Pending", "In Progress", "Completed"];


interface Employee {
  _id: string; // Assuming MongoDB _id
  name: string;
  email: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  userId?: string; // Optional, if it's stored but not always used on the frontend
}


export function CreateTaskModel({open, onClose, employee}: {open: boolean, onClose: () => void, employee: Employee[]}) {
    
    const taskRef = useRef<HTMLInputElement>(null);
    const employeeRef = useRef<HTMLSelectElement>(null);
    const priorityRef = useRef<HTMLSelectElement>(null);
    const departmentRef = useRef<HTMLSelectElement>(null);
    const statusRef = useRef<HTMLSelectElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);

    const createTask = () => {
        const task = taskRef.current?.value;
        const employee = employeeRef.current?.value;
        const priority = priorityRef.current?.value;
        const department = departmentRef.current?.value;
        const status = statusRef.current?.value;
        const date = dateRef.current?.value;

        console.log(department);

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/task`, {
            task,
            employee,    
            priority,
            department,
            status,
            date
        },
        {
            headers: {
                "token": localStorage.getItem("token")
            }
        }
        ).then((response) => {
            alert(response.data.message);
            onClose();
        })
    }

 
       
        

    return <div>
        {open && <div>
            <div className="w-screen h-full flex justify-center items-center bg-slate-500 fixed top-0 left-0 opacity-65">
            
            </div> 
            <div className="w-screen h-full flex flex-col justify-center items-center fixed top-0 left-0 ">
                <div className="bg-gradient-to-r from-white via-white/80 to-rose-50 rounded-2xl p-10 shadow-lg flex items-center justify-center gap-30">
                    <div >
                        <ManLogo/>
                    </div>
                    <div className="bg-white p-6 rounded-2xl">
                        <div>
                            <div className=" text-[#567BFF] font-bold text-2xl">
                            Add New Task
                            </div>
                            <h3 className="text-gray-400">Create and assign a new task to team members.</h3>
                        </div>
                     
                       
                        <div className="flex flex-col gap-6 my-7">
                            <div className="flex items-center gap-5">
                                <div className="flex flex-col w-80" >
                                    <label htmlFor="task" className="mb-1 text-md font-medium">Task Title</label>
                                    <input type="text" ref={taskRef}  className="rounded-md border-1 py-2 border-[#BFBFBF]  shadow-sm p-1"/>
                                </div>
                                <div className="flex flex-col w-80">
                                    <label htmlFor="department" className="mb-1 text-md font-medium">Priority</label>
                                    <select ref={priorityRef} id="priority" name="priority" className="rounded-md border-1 border-[#BFBFBF] py-2  shadow-sm p-1 ">
                                    <option selected disabled hidden>Select priority</option>
                                    {priorityOptions.map((priorityOptions) => <option key={priorityOptions} value={priorityOptions}>{priorityOptions}</option>)}
                                    </select>
                                </div>
                            </div>
                            

                            <div className="flex items-center gap-5">
                                <div className="flex flex-col w-80">
                                    <label htmlFor="role" className="mb-1 text-md font-medium">Role</label>
                                    <select ref={employeeRef} id="role" className=" rounded-md border-1 border-[#BFBFBF] py-2 text-md  shadow-sm p-1 ">
                                    <option selected disabled hidden className="text-[#94A3B8]">Assign To</option>
                                    {employee.map((employee) => <option key={employee._id} value={employee._id}>{employee.name + " (" + employee.email + ")"}</option> )}
                                    </select>
                                </div>
                                <div className="flex flex-col w-80">
                                    <label htmlFor="department" className="mb-1 text-md font-medium">Department</label>
                                    <select ref={departmentRef} id="department" name="department" className="rounded-md border-1 border-[#BFBFBF] py-2  shadow-sm p-1 ">
                                    <option selected disabled hidden>Select department</option>
                                    {department.map((department) => <option key={department} value={department}>{department}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="flex flex-col w-80">
                                    <label htmlFor="status" className="mb-1 text-md font-medium">Status</label>
                                    <select ref={statusRef} id="department" name="status" className="rounded-md border-1 border-[#BFBFBF] py-2  shadow-sm p-1 ">
                                    <option selected disabled hidden>Select department</option>
                                    {statusOptions.map((statusOptions) => <option key={statusOptions} value={statusOptions}>{statusOptions}</option>)}
                                    </select>
                                </div>
                                <div className="flex flex-col w-80">
                                    <label htmlFor="date" className="mb-1 text-md font-medium">Due date</label>
                                    <input ref={dateRef} type="date"  className="rounded-md border-1 py-2 border-[#BFBFBF]  shadow-sm p-1"/>
                                </div>
                            </div>    
                        </div>

                        <div className="flex mt-14 items-center ">
                            <div className="mr-2">     
                                <Button onClick={() => {createTask()}} heading="Create Task"/>
                            </div>
                            <div>
                                <button onClick={onClose} className="flex items-center justify-around bg-gray-500 rounded-md text-white p-3 cursor-pointer">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                
               
            </div>        
        </div>
        }
    </div>
   
}

