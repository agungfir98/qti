import React, {
  useContext,
  useState,
  FormEvent,
  HTMLInputTypeAttribute,
} from "react";
import { api } from "../../utils/api";
import { credContext } from "../template";

const CreateUserModal: React.FC = () => {
  const { cred } = useContext(credContext);
  const token = JSON.parse(cred).token;

  const [userData, setUserData] = useState({
    email: "",
    employee: "",
    password: "",
    confirm_password: "",
    is_active: true,
    departement: "",
  });

  const handleChange = (e: {
    target: { name: HTMLInputTypeAttribute; value: HTMLInputTypeAttribute };
  }) => {
    const { name, value } = e.target;

    setUserData((prev) => {
      if (name === "email") {
        return { ...prev, email: value };
      }
      if (name === "employee") {
        return { ...prev, employee: value };
      }
      if (name === "password") {
        return { ...prev, password: value };
      }
      if (name === "confirmPassword") {
        return { ...prev, confirm_password: value };
      }
      if (name === "isactive") {
        return { ...prev, is_active: !userData.is_active };
      }
      if (name === "departement") {
        return { ...prev, departement: value };
      }
      return { ...prev };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    api
      .post(`/user/`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-center font-semibold">Create User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* // *Email ======== */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>
        {/* // *employee ======== */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="employee" className="font-semibold text-sm">
            employee
          </label>
          <input
            id="employee"
            name="employee"
            type="text"
            value={userData.employee}
            onChange={handleChange}
            placeholder="Enter employee"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>
        {/* // *password ======== */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold text-sm">
            password
          </label>
          <input
            id="password"
            name="password"
            type="text"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>
        {/* // *confirm passwrod ======== */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="confirmPasswrod" className="font-semibold text-sm">
            confirm passwrod
          </label>
          <input
            id="confirmPasswrod"
            name="confirmPassword"
            type="password"
            value={userData.confirm_password}
            onChange={handleChange}
            placeholder="confirm passwrod"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>

        {/* // *CheckBox ======== */}
        <div className=" flex gap-2 my-1 items-center">
          <input
            type="checkbox"
            name="isactive"
            id="isactive"
            checked={userData.is_active}
            onChange={handleChange}
          />
          <label
            htmlFor="isactive"
            className="font-semibold text-sm cursor-pointer checkbox-label flex"
          >
            is active
          </label>
        </div>
        {/* // *departement ======== */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="departement" className="font-semibold text-sm">
            departement
          </label>
          <input
            id="departement"
            name="departement"
            type="text"
            value={userData.departement}
            onChange={handleChange}
            placeholder="Enter departement"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#198564] rounded-lg py-3 text-white font-semibold mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default CreateUserModal;
