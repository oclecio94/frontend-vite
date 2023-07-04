import { useNavigate } from "react-router-dom";

const HeaderComponent = ({ title, placeholder, value, onChange, route }) => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-row justify-between w-full mb-1 sm:mb-0">
      <h2 className="text-2xl leading-tight">{title}</h2>
      <div className="text-end">
        <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
          <div className=" relative ">
            <input
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </div>
          <button
            onClick={() => navigate(route)}
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
          >
            Adicionar
          </button>
        </form>
      </div>
    </header>
  );
};

export default HeaderComponent;
