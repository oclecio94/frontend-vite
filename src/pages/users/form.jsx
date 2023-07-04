import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { authInRequest } from "../../store/modules/auth/actions";
// import { useNavigate } from "react-router-dom";

const FormUser = () => {
  const schema = z.object({
    name: z.string("Campo obrigatório!"),
    email: z.string().email("Digite um Email válido!"),
    password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  //   const navigate = useNavigate();
  //   const store = useSelector((store) => store.auth);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (store?.signed) navigate("/home");
  //   }, [store]);

  //   const loginRequest = (data) => {
  //     const { email, password } = data;
  //     dispatch(authInRequest(email, password));
  //   };

  //{...register("name")} no input
  //{errors?.email?.message && <p>{errors.name.message}</p>}

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-6 shadow-lg bg-white rounded-md"
      >
        <h1 className="text-3xl block text-center font-semibold">Cadastro</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label htmlFor="name" className="block text-base mb-2">
            Nome
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
          {errors?.name?.message && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="email" className="block text-base mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
          {errors?.email?.message && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2">
            Senha
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
          {errors?.password?.message && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="phone" className="block text-base mb-2">
            Telefone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="location" className="block text-base mb-2">
            CEP
          </label>
          <input
            type="number"
            id="location"
            name="location"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="addres" className="block text-base mb-2">
            Endereço
          </label>
          <input
            type="text"
            id="addres"
            name="addres"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="number" className="block text-base mb-2">
            Numero
          </label>
          <input
            type="number"
            id="number"
            name="number"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="state" className="block text-base mb-2">
            Estado
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="city" className="block text-base mb-2">
            Cidade
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>

        <div className="flex mt-5">
          <button
            type="submit"
            className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUser;
