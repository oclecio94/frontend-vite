import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authInRequest } from "../../store/modules/auth/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const schema = z.object({
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

  const navigate = useNavigate();
  const store = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (store?.signed) navigate("/home");
  }, [store]);

  const loginRequest = (data) => {
    const { email, password } = data;
    dispatch(authInRequest(email, password));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Sistema Front End
          </h1>
          <p className="leading-relaxed mt-4">
            Entre para ter acesso aos nossos inumeros serviços!
          </p>
        </div>
        <form
          onSubmit={handleSubmit(loginRequest)}
          className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Entrar
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              {...register("email")}
              type="text"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors?.email?.message && <p>{errors.email.message}</p>}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Senha
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors?.password?.message && <p>{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Acessar
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Esqueceu a senha?{" "}
            <a className="text-red-500 hover:text-red-600" href="#">
              clique aqui
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
