import { exitIn } from "../../store/modules/auth/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavigateComponent = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="bg-purple-700 text-white h-screen w-[200px] transition-all duration-75"
      >
        <div className="flex items-center p-4 justify-between">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="text-2xl"
          >
            LOGO
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "-2px" }}
            className="flex text-xl"
          >
            <svg
              onClick={toogle}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-xl"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <a
          href="#"
          onClick={() => navigate("/home")}
          className="flex p-4 gap-4 transition-all duration-75 items-center hover:bg-purple-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="transition-all duration-75 text-xl"
          >
            Dashboard
          </div>
        </a>
        <a
          href="#"
          onClick={() => navigate("/usuarios")}
          className="flex p-4 gap-4 transition-all duration-75 items-center hover:bg-purple-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="transition-all duration-75 text-xl"
          >
            Usuários
          </div>
        </a>
        <a
          href="#"
          onClick={() => dispatch(exitIn())}
          className="flex p-4 gap-4 transition-all duration-75 items-center hover:bg-purple-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="transition-all duration-75 text-xl"
          >
            Sair
          </div>
        </a>
      </div>
      <main className="w-screen p-4">{children}</main>
    </div>
  );
};

export default NavigateComponent;
