import { NextPage } from "next";
import { Template } from "../components/template";
import UserComponent from "../components/userComponent";

const User: NextPage = () => {
  return (
    <Template>
      <UserComponent />
    </Template>
  );
};

export default User;
