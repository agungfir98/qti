import React, { ReactNode, useContext } from "react";
import { UserParamContext } from "../userComponent";

const ModalContainer: React.FC<{
  children: ReactNode;
  handleModalOpen: () => void;
}> = ({ children, handleModalOpen }) => {
  const { ModalOpen } = useContext(UserParamContext);

  return (
    <div
      className={`${
        !ModalOpen && "hidden"
      } fixed z-10 top-0 left-0 h-screen w-screen overflow-auto bg-black/30 flex justify-center items-center`}
      onClick={handleModalOpen}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-fit w-[90%] md:w-[50%] px-5 py-6 bg-white -mt-20 md:mt-0 overflow-auto rounded-xl relative"
      >
        <div
          className="absolute font-semibold right-5 top-2 text-xl cursor-pointer"
          onClick={handleModalOpen}
        >
          &times;
        </div>
        {children}
      </div>
    </div>
  );
};
export default ModalContainer;
