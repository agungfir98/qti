export const Navbar: React.FC<{
  navOpen: boolean;
  setNavOpen: () => void;
}> = ({ navOpen, setNavOpen }) => {
  const data = {
    name: "Agung Firmansyah",
    role: "Administrator",
  };

  const handleToggleNav = () => setNavOpen();

  return (
    <nav className="w-full bg-[#F6F6F9] h-[73px] px-5 md:px-8 flex justify-between items-center">
      <div className="flex gap-3 items-center h-full">
        <div
          id="hamburger"
          className="cursor-pointer"
          onClick={handleToggleNav}
        >
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4219 0.9375H0.578125C0.483594 0.9375 0.40625 1.01484 0.40625 1.10938V2.48438C0.40625 2.57891 0.483594 2.65625 0.578125 2.65625H17.4219C17.5164 2.65625 17.5938 2.57891 17.5938 2.48438V1.10938C17.5938 1.01484 17.5164 0.9375 17.4219 0.9375ZM17.4219 14.3438H0.578125C0.483594 14.3438 0.40625 14.4211 0.40625 14.5156V15.8906C0.40625 15.9852 0.483594 16.0625 0.578125 16.0625H17.4219C17.5164 16.0625 17.5938 15.9852 17.5938 15.8906V14.5156C17.5938 14.4211 17.5164 14.3438 17.4219 14.3438ZM17.4219 7.64062H0.578125C0.483594 7.64062 0.40625 7.71797 0.40625 7.8125V9.1875C0.40625 9.28203 0.483594 9.35938 0.578125 9.35938H17.4219C17.5164 9.35938 17.5938 9.28203 17.5938 9.1875V7.8125C17.5938 7.71797 17.5164 7.64062 17.4219 7.64062Z"
              fill="#03050B"
            />
          </svg>
        </div>
        <h1 className="font-bold text-xl cursor-default">LOGO</h1>
      </div>
      <div id="profile" className="flex gap-3 h-10 items-center">
        <div className="flex rounded-full  w-10 h-10 bg-black text-white font-bold items-center justify-center">
          AF
        </div>
        <div id="profilename" className="hidden md:block">
          <div id="name" className="font-medium">
            {data.name}
          </div>
          <div id="role" className="font-normal text-[rgba(52,52,52,0.7)]">
            {data.role}
          </div>
        </div>
        <div id="downarrow">
          <svg
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.37379 1.04289C1.98327 0.652369 1.3501 0.652369 0.95958 1.04289C0.569056 1.43342 0.569056 2.06658 0.95958 2.45711L2.37379 1.04289ZM9.00002 9.08333L8.29291 9.79044C8.48045 9.97798 8.7348 10.0833 9.00002 10.0833C9.26524 10.0833 9.51959 9.97798 9.70713 9.79044L9.00002 9.08333ZM17.0405 2.45711C17.431 2.06658 17.431 1.43342 17.0405 1.04289C16.6499 0.652369 16.0168 0.652369 15.6262 1.04289L17.0405 2.45711ZM0.95958 2.45711L8.29291 9.79044L9.70713 8.37623L2.37379 1.04289L0.95958 2.45711ZM9.70713 9.79044L17.0405 2.45711L15.6262 1.04289L8.29291 8.37623L9.70713 9.79044Z"
              fill="#03050B"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};
