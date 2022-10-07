import type { NextPage } from "next";
import { useState, createContext, useEffect } from "react";
import { Dashboard } from "../components/dashboard";
import { Navbar } from "../components/navbar";
import SalesComponent from "../components/sales";
import { SideNav } from "../components/sideNav";
import UserComponent from "../components/userComponent";
import { activeState, credentials } from "../types/type";
import { useRouter } from "next/router";
export const activeNavContext = createContext({
  sideNavOpen: false,
  activeNav: "",
  sideNavUserOpen: false,
});
const Home: NextPage = () => {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(false);
  const [sideNavUserOpen, setSideNavUserOpen] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>(activeState.DASHBOARD);
  const [cred, setCred] = useState<credentials | string>((): any => {
    if (typeof window !== "undefined")
      return window.localStorage.getItem("creds");
  });
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const handleNav = () => {
    setSideNavOpen(!sideNavOpen);
  };
  const handleActiveNav = (str: string) => {
    setActiveNav(str);
  };

  useEffect(() => {
    !cred && router.push("/login");
    cred && setLoading(false);
    () => setLoading(false);
  }, [cred, router]);

  return (
    <>
      {!loading && (
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
      )}
    </>
  );
};

export default Home;
