import { useState } from "react";
import img from "../assets/blank-profile.jpg";
import DialogBox from "./DialogBox";

const Card = ({ EmployeeData }) => {
  const { name, id, email, profile, project } = EmployeeData;
  const [status, setStatus] = useState(true);
  const [visible, setVisible] = useState(false);
  const handleEditClick = () => {
    setVisible(true);
  };
  return (
    <div>
      <div className="*:font-[Open_Sans] px-4 py-2 rounded-lg border flex-grow max-w-[350px] h-[370px] bg-white shadow-2xl">
        <div className="flex justify-between">
          <div className="rounded-md border border-black flex overflow-hidden">
            <span
              className={`${status ? "bg-green-600" : "bg-transparent"} ${
                status ? "text-white" : "text-black"
              } text-center text-semibold cursor-pointer text-[10px] px-2 py-[2px]`}
              onClick={() => setStatus(true)}
            >
              Active
            </span>

            <span
              className={`${!status ? "bg-red-600" : "bg-transparent"} ${
                !status ? "text-white" : "text-black"
              } text-center bg-transparent cursor-pointer text-semibold text-black text-[10px] px-2 py-[2px]`}
              onClick={() => setStatus(false)}
            >
              Inactive
            </span>
          </div>
          <div
            className="text-md font-semibold cursor-pointer"
            onClick={handleEditClick}
          >
            Edit
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1">
          <div className="rounded-full border-8 border-white w-20 h-20 overflow-hidden shadow-2xl">
            <img className="w-16 h-16" src={img} alt="" />
          </div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs">{email}</p>
        </div>
        <div className="grid grid-cols mt-2">
          <span className="text-xs text-zinc-600">Profile</span>
          <span className="text-md font-bold">{profile}</span>
        </div>
        <div className="flex items-center justify-center mt-2">
          <hr className="border-0 h-[0.1px] bg-slate-600 my-2 flex-grow max-w-1/3" />
          <span className="text-xs px-2 text-zinc-600">
            Associated Projects
          </span>
          <hr className="border-0 h-[0.1px] bg-slate-600 flex-grow my-2 max-w-1/3" />
        </div>

        <div className="flex shadow-md justify-between px-2 w-full bg-slate-100 h-[80px] my-3 rounded-md py-2">
          <div className="flex flex-col space-y-1 items-center">
            <span className="text-sm font-semibold">Project ID</span>
            <span className="text-xs">{project.projectId}</span>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <span className="text-sm font-semibold">Assigned Role</span>
            <span className="text-xs">{project.assignedRole}</span>
          </div>
        </div>

        <div>
          <hr className="border-0 h-[0.1px] bg-slate-600 flex-grow max-w-1/3" />
        </div>
        <div className="flex space-x-1 text-[10.5px] justify-center pt-1 text-zinc-600">
          <span>Last Access : </span>
          <span>29/Sep/2025</span>
          <span>10:45 AM</span>
        </div>
      </div>
      <div>
        <DialogBox
          type={"edit"}
          data={EmployeeData}
          visible={visible}
          setVisible={setVisible}
        />
      </div>
    </div>
  );
};

export default Card;
