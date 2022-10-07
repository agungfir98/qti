import { useRouter } from "next/router";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { SideNav } from "./sideNav";

export const sideNavContext = createContext({ sideNavOpen: false });

export const Template: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(true);

  const [cred, setCred] = useState<string>((): any => {
    if (typeof window !== "undefined")
      return window.localStorage.getItem("creds");
  });
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    !cred && router.push("/login");
    cred && setLoading(false);
    () => setLoading(false);
  }, [cred, router]);

  const handleNav = () => {
    setSideNavOpen(!sideNavOpen);
  };
  return (
    <>
      <sideNavContext.Provider value={{ sideNavOpen: sideNavOpen }}>
        {!loading && (
          <div className="max-h-screen bg-[#F6F6F9] overflow-hidden motion-reduce:transition-none motion-reduce:hover:transform-none">
            <Navbar setNavOpen={handleNav} />
            <div className="h-[calc(100vh-73px)] flex">
              <SideNav
                setNavOpen={handleNav}
                // onChangeUserNav={(arg) => setSideNavUserOpen(arg)}
              />
              <main className="p-5 py-6 h-full grow overflow-auto">
                {children}
              </main>
            </div>
          </div>
        )}
      </sideNavContext.Provider>
    </>
  );
};
