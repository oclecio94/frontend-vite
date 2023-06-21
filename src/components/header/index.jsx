import { useNavigate } from "react-router-dom";

const HeaderComponent = ({ title, placeholder, value, onChange, route }) => {
  const navigate = useNavigate();
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">{title}</span>
        </a>
        <div className="flex">
          <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="mr-2 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          />
          <button
            onClick={() => navigate(route)}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Adicionar
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
