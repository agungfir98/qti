import React, { useContext } from "react";
import { FormEvent } from "react";
import { api } from "../../utils/api";
import { credContext } from "../template";
import { UserParamContext } from "../userComponent";

export const EditModalContent: React.FC<{
  handleEditChange: (e: FormEvent) => void;
  handleModalOpen: () => void;
}> = ({ handleEditChange, handleModalOpen }) => {
  const { userData } = useContext(UserParamContext);
  const { cred } = useContext(credContext);
  const token = JSON.parse(cred).token;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    api
      .put(
        `/user/${userData.id}`,
        {
          email: userData.email,
          employee: userData.employee,
          password: userData.password,
          confirm_password: userData.confirm_password,
          is_active: userData.is_active,
          departement: userData.departement,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center font-semibold">Edit User</h1>
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
            onChange={handleEditChange}
            placeholder="Enter email"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>
        {/* // *employee */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="employee" className="font-semibold text-sm">
            employee
          </label>
          <input
            id="employee"
            name="employee"
            type="text"
            value={userData.employee}
            onChange={handleEditChange}
            placeholder="Enter employee"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>
        {/* // *password */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold text-sm">
            password
          </label>
          <input
            id="password"
            name="password"
            type="text"
            value={userData.password}
            onChange={handleEditChange}
            placeholder="password"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>
        {/* // *confirm password */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="font-semibold text-sm">
            confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="text"
            value={userData.confirm_password}
            onChange={handleEditChange}
            placeholder="confirm password"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>

        {/* // *CheckBox ======== */}
        <div className="flex flex-col gap-2 my-1 items-start">
          <h2 className="font-semibold text-sm">Status</h2>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="isactive"
              id="isactive"
              checked={userData.is_active}
              onChange={handleEditChange}
            />
            <label
              htmlFor="isactive"
              className="font-semibold text-sm cursor-pointer"
            >
              Active
            </label>
          </div>
        </div>
        {/* // *Departement */}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="departement" className="font-semibold text-sm">
            departement
          </label>
          <input
            id="departement"
            name="departement"
            type="text"
            value={userData.departement}
            onChange={handleEditChange}
            placeholder="departement"
            className="bg-[#EFEFEF] p-3 px-4 rounded-xl"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-3 bg-green-600 py-2 text-white font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
