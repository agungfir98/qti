import React, { useContext } from "react";
import { api } from "../../utils/api";
import { credContext } from "../template";
import { UserParamContext } from "../userComponent";

const DeleteUserModal: React.FC<{ handleModalOpen: () => void }> = ({
  handleModalOpen,
}) => {
  const { userData } = useContext(UserParamContext);
  const { cred } = useContext(credContext);
  const token = JSON.parse(cred).token;

  const handleDeleteUser = () => {
    api
      .delete(`/user/${userData.id}`, {
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
    <div className="flex flex-col items-center gap-2">
      <h1 className="font-bold text-lg">Delete</h1>
      <p>Are you sure you want to delete {userData.employee}?</p>

      <div className="flex gap-3 w-full justify-center mt-3">
        <button
          className="w-full bg-red-500 text-white py-3 rounded-lg font-medium"
          onClick={handleDeleteUser}
        >
          Delete
        </button>
        <button
          className="w-full bg-slate-500 text-white py-3 rounded-lg font-medium"
          onClick={handleModalOpen}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default DeleteUserModal;
