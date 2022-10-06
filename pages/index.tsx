import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Dashboard } from "../components/dashboard";
import { Navbar } from "../components/navbar";
import { SlideMenu } from "../components/sideNav";

const Home: NextPage = () => {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(false);

  const handleNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <div className="max-h-screen bg-[#F6F6F9] overflow-hidden">
      <Navbar navOpen={sideNavOpen} setNavOpen={handleNav} />
      <div className="h-[calc(100vh-73px)] flex">
        <SlideMenu navOpen={sideNavOpen} setNavOpen={handleNav} />
        <main className="p-5 py-6 h-full grow overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Home;
