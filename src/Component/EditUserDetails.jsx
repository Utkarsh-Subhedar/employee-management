import React, { useState, useLayoutEffect, useContext } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Employeestore } from "../Store/EmployeeContext";

export default function HeadlessDemo({ data, hide, type }) {
  let errorStatement = "This field is required";
  const { editCard, addCard } = useContext(Employeestore);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    profile: false,
    projectId: false,
    assignedRole: false,
  });

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    profile: "",
    project: {
      projectId: "",
      assignedRole: "",
    },
  });
  useLayoutEffect(() => {
    if (data) {
      setUserData({
        id: data.id,
        name: data.name,
        email: data.email,
        profile: data.profile,
        project: {
          projectId: data.project.projectId,
          assignedRole: data.project.assignedRole,
        },
      });
    }
  }, [data]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name == "projectId") {
      setUserData((prev) => ({
        ...prev,
        project: { projectId: value, assignedRole: prev.project.assignedRole },
      }));
    } else if (name == "assignedRole") {
      setUserData((prev) => ({
        ...prev,
        project: { projectId: prev.project.projectId, assignedRole: value },
      }));
    } else {
      setUserData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSave = (e) => {
    const { name, email, profile, project } = userData;

    if (name == "") {
      setErrors((prev) => ({ ...prev, name: true }));
    } else {
      setErrors((prev) => ({ ...prev, name: false }));
    }
    if (email == "") {
      setErrors((prev) => ({ ...prev, email: true }));
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
    }
    if (profile == "") {
      setErrors((prev) => ({ ...prev, profile: true }));
    } else {
      setErrors((prev) => ({ ...prev, profile: false }));
    }
    if (project.projectId == "") {
      setErrors((prev) => ({ ...prev, projectId: true }));
    } else {
      setErrors((prev) => ({ ...prev, projectId: false }));
    }
    if (project.assignedRole == "") {
      setErrors((prev) => ({ ...prev, assignedRole: true }));
    } else {
      setErrors((prev) => ({ ...prev, assignedRole: false }));
    }
    if (name && email && profile && project.projectId && project.assignedRole) {
      if (type == "edit") {
        editCard(userData);
      } else if (type == "add") {
        addCard(userData);
      }
      hide(e);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col px-4 py-2 md:py-5 gap-1 bg-slate-300 rounded-lg">
        <div className="grid grid-cols-2 content-center gap-1">
          <div className="inline-flex flex-col gap-1">
            <label htmlFor="username" className="text-primary-50 font-semibold">
              Full name <span className="text-sm text-red-600">*</span>
            </label>
            <InputText
              id="username"
              name="name"
              label="Username"
              className={`bg-white-alpha-20 border-none p-2 md:p-3 text-primary-50 w-auto placeholder:text-xs md:placeholder:text-md ${
                errors.name ? "ring-1 ring-red-600" : ""
              }`}
              value={userData.name}
              placeholder="Enter your full name"
              onChange={(e) => handleInput(e)}
            ></InputText>
            <p
              className={`text-xs text-red-600 ${
                errors.name ? "block" : "invisible"
              }`}
            >
              {errorStatement}
            </p>
          </div>
          <div className="inline-flex flex-col gap-1">
            <label htmlFor="email" className="text-primary-50 font-semibold">
              Email <span className="text-sm text-red-600">*</span>
            </label>
            <InputText
              id="email"
              label="Email"
              name="email"
              value={userData.email}
              className={`bg-white-alpha-20 border-none p-2 md:p-3 text-primary-50 w-auto placeholder:text-xs md:placeholder:text-md ${
                errors.email ? "ring-1 ring-red-600" : ""
              }`}
              placeholder="Enter your Email"
              onChange={(e) => handleInput(e)}
            ></InputText>
            <p
              className={`text-xs text-red-600 ${
                errors.email ? "block" : "invisible"
              }`}
            >
              {errorStatement}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 *:text-base *:font-medium">
          <div className="text-primary-50 font-semibold w-full">
            Profile <span className="text-sm text-red-600">*</span>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="choice1"
              name="profile"
              value="Super Admin"
              onChange={(e) => handleInput(e)}
              checked={userData.profile === "Super Admin"}
            />
            <label htmlFor="SuperAdmin" className="ml-2">
              Super Admin
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="choice2"
              name="profile"
              value="Admin"
              onChange={(e) => handleInput(e)}
              checked={userData.profile === "Admin"}
            />
            <label htmlFor="Admin" className="ml-2">
              Admin
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="choice3"
              name="profile"
              value="Team Leader"
              onChange={(e) => handleInput(e)}
              checked={userData.profile === "Team Leader"}
            />
            <label htmlFor="TeamLeader" className="ml-2">
              Team Leader
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="choice1"
              name="profile"
              value="Employee"
              onChange={(e) => handleInput(e)}
              checked={userData.profile === "Employee"}
            />
            <label htmlFor="Employee" className="ml-2">
              Employee
            </label>
          </div>
          <p
            className={`text-xs text-red-600 w-full ${
              errors.profile ? "block" : "invisible"
            }`}
          >
            {errorStatement}
          </p>
        </div>

        <div className="grid grid-cols-2 content-center gap-1 mb-1">
          <div className="inline-flex flex-col gap-1">
            <label
              htmlFor="projectId"
              className="text-primary-50 font-semibold"
            >
              Project ID{" "}
              <span
                className="text-sm text-red-600 ${
"
              >
                *
              </span>
            </label>
            <InputText
              id="projectId"
              label="Project ID"
              name="projectId"
              className={`bg-white-alpha-20 border-none p-2 md:p-3 text-primary-50 w-auto placeholder:text-xs md:placeholder:text-md ${
                errors.projectId ? "ring-1 ring-red-600" : ""
              }`}
              placeholder="Project ID"
              value={userData.project.projectId}
              onChange={(e) => handleInput(e)}
            ></InputText>
            <p
              className={`text-xs text-red-600 ${
                errors.projectId ? "block" : "invisible"
              }`}
            >
              {errorStatement}
            </p>
          </div>
          <div className="inline-flex flex-col gap-1">
            <label htmlFor="role" className="text-primary-50 font-semibold">
              Assigned Role <span className="text-sm text-red-600">*</span>
            </label>
            <InputText
              id="assignedRole"
              label="assignedRole"
              name="assignedRole"
              placeholder="Assigned Role"
              className={`bg-white-alpha-20 border-none p-2 md:p-3 text-primary-50 w-auto placeholder:text-xs md:placeholder:text-md ${
                errors.role ? "ring-1 ring-red-600" : ""
              }`}
              value={userData.project.assignedRole}
              disabled={data && userData.project.assignedRole}
              onChange={(e) => handleInput(e)}
            />
            <p
              className={`text-xs text-red-600 ${
                errors.assignedRole ? "block" : "invisible"
              }`}
            >
              {errorStatement}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            label="Save"
            onClick={(e) => handleSave(e)}
            text
            className="p-3 w-full text-primary-50 border-2 border-white hover:bg-white"
          ></Button>
          <Button
            label="Cancel"
            onClick={(e) => hide(e)}
            text
            className="p-3 w-full text-primary-50 border-2 border-white hover:bg-white"
          ></Button>
        </div>
      </div>
    </div>
  );
}
