import type { NextPage } from "next";
import { Dashboard } from "../components/dashboard";
import { Template } from "../components/template";

const Home: NextPage = () => {
  return (
    <Template>
      <Dashboard />
    </Template>
  );
};

export default Home;
