import type { NextPage } from "next";
import { useState, createContext, useEffect } from "react";
import { Dashboard } from "../components/dashboard";
import { Navbar } from "../components/navbar";
import SalesComponent from "../components/sales";
import { SideNav } from "../components/sideNav";
import UserComponent from "../components/userComponent";
import { activeState } from "../types/type";

export const activeNavContext = createContext({
  sideNavOpen: false,
  activeNav: "",
  sideNavUserOpen: false,
});
const Home: NextPage = () => {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(false);
  const [sideNavUserOpen, setSideNavUserOpen] = useState<boolean>(false);

  const [activeNav, setActiveNav] = useState<string>(activeState.DASHBOARD);

  const handleNav = () => {
    setSideNavOpen(!sideNavOpen);
  };
  const handleActiveNav = (str: string) => {
    setActiveNav(str);
  };

  useEffect(() => {
    console.log(activeNav);
  }, [activeNav]);

  return (
    <activeNavContext.Provider
      value={{ sideNavOpen, activeNav, sideNavUserOpen }}
    >
      <div className="max-h-screen bg-[#F6F6F9] overflow-hidden motion-reduce:transition-none motion-reduce:hover:transform-none">
        <Navbar setNavOpen={handleNav} />
        <div className="h-[calc(100vh-73px)] flex">
          <SideNav
            setNavOpen={handleNav}
            onChangeActiveNav={(str: string) => {
              handleActiveNav(str);
            }}
            onChangeUserNav={(arg) => setSideNavUserOpen(arg)}
          />
          <main className="p-5 py-6 h-full grow overflow-auto">
            {activeNav === activeState.DASHBOARD ? (
              <Dashboard />
            ) : activeNav === activeState.SALES ? (
              <SalesComponent />
            ) : activeNav === activeState.USER_MNG ? (
              <UserComponent />
            ) : null}
          </main>
        </div>
      </div>
    </activeNavContext.Provider>
  );
};

export default Home;
