import { useNavigate } from "react-router-dom"
import { AttendenceIcon } from "../icons/attendanceIcon"
import { DashboardIcon } from "../icons/dashboardIcon"
import { EmployeeIcon } from "../icons/employeeIcon"
import { SettingIcon } from "../icons/settingIcon"
import { TaskIcon } from "../icons/taskIcon"
import { DashboardLogo } from "../logo/dashboradLogo"

export const Sidebar = () => {
    const navigate = useNavigate();

    return <div className="w-64 bg-[#567BFF] text-white flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold p-4 text-white">
            <div className="text-white"><DashboardLogo/></div>
          </h1>
          <nav className="mt-6 flex flex-col space-y-2" >
            <a className="px-4 py-2 flex hover:bg-blue-400 rounded-md cursor-pointer" onClick={() => navigate("/dashboard")}>
                <div className="mr-4">
                    <DashboardIcon/>
                </div>
                <div>
                    Dashboard
                </div>
            </a>
            <a className="px-4 py-2 flex hover:bg-blue-400 rounded-md cursor-pointer" onClick={() => navigate("/employee")}>
                <div className="mr-4">
                    <EmployeeIcon/>
                </div>
                <div>
                    Employees
                </div>
            </a>
            <a className="px-4 py-2 flex hover:bg-blue-400 rounded-md cursor-pointer">
                <div className="mr-4">
                    <AttendenceIcon/>
                </div>
                <div>
                    Attendance
                </div>
            </a>
            <a className="px-4 py-2 flex hover:bg-blue-400 rounded-md cursor-pointer">
                <div className="mr-4">
                    <TaskIcon/>
                </div>
                <div>
                    Tasks
                </div>
            </a>
            <a className="px-4 py-2 flex hover:bg-blue-400 rounded-md cursor-pointer">
                <div className="mr-4">
                    <SettingIcon/>
                </div>
                <div>
                    Settings
                </div>
            </a>
          </nav>
        </div>
        <div className="p-4 flex items-center gap-2">
          <img
            src="https://imgs.search.brave.com/LZVvz2m6dEdxABLGXG0gsI8DRnezcqYeh1zPBYF3tc4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/Y2hhbmdlLWxvY2F0/aW9uLndlYnA"
            className="w-10 h-10 rounded-full"
            alt="profile"
          />
          <div>
            <p className="font-medium">Tom H.</p>
            <p className="text-sm opacity-75">Project Manager</p>
          </div>
        </div>
      </div>
}