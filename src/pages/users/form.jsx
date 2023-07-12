import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser, getById, updateUser } from "./requests";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const FormUser = () => {
  const user = useSelector((state) => state.user.data);
  const { state } = useLocation();
  const navigate = useNavigate();

  const schema = z.object({
    name: z.string().min(4, "O nome precisa ter pelo menos 4 letras!"),
    email: z.string().email("Digite um Email válido!"),
    password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres!"),
  });

  const schemaUpdate = z.object({
    name: z.string().min(4, "O nome precisa ter pelo menos 4 letras!"),
    email: z.string().email("Digite um Email válido!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "all",
    resolver: zodResolver(!state?.id ? schema : schemaUpdate),
  });

  useEffect(() => {
    if (state?.id) {
      const getUser = async () => {
        const res = await getById(state.id);
        setValue("address", res.address);
        setValue("cep", res.cep);
        setValue("city", res.city);
        setValue("email", res.email);
        setValue("name", res.name);
        setValue("number", res.number);
        setValue("phone", res.phone);
      };
      getUser();
    }
  }, []);

  const save = (data) => {
    if (!state?.id) {
      data.masterId = user.id;
      createUser(data, navigate);
    } else {
      updateUser(state.id, data, navigate);
    }
  };

  return (
    <main>
      <h1 className="mb-2 text-2xl font-bold">
        {state?.id ? "Editar Usuário" : "Adicionar Usuário"}
        {""}
      </h1>
      <form
        onSubmit={handleSubmit(save)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
      >
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              {...register("name")}
              className="appearance-none block w-full border border-red rounded py-1 px-2 mb-1"
              id="name"
              type="text"
              name="name"
              placeholder="..."
            />
            {errors?.name?.message && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email")}
              className="appearance-none block w-full border border-grey-lighter rounded py-1 px-2 mb-1"
              id="email"
              type="email"
              name="email"
              placeholder="..."
            />
            {errors?.email?.message && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              {...register("password")}
              className="appearance-none block w-full border border-red rounded py-1 px-2 mb-1"
              id="password"
              type="password"
              name="password"
              placeholder="..."
            />
            {errors?.password?.message && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="phone"
            >
              Telefone
            </label>
            <input
              className="appearance-none block w-full border border-grey-lighter rounded py-1 px-2 mb-1"
              id="phone"
              type="number"
              name="phone"
              placeholder="..."
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="addres"
            >
              Endereço
            </label>
            <input
              className="appearance-none block w-full border border-red rounded py-1 px-2 mb-1"
              id="addres"
              type="text"
              name="addres"
              placeholder="..."
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="location"
            >
              CEP
            </label>
            <input
              className="appearance-none block w-full border border-grey-lighter rounded py-1 px-2 mb-1"
              id="location"
              type="number"
              name="location"
              placeholder="..."
            />
          </div>
        </div>

        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              htmlFor="number"
            >
              Numero
            </label>
            <input
              className="appearance-none block w-full border border-grey-lighter rounded py-1 px-2 mb-1"
              id="number"
              type="number"
              name="number"
              placeholder="number"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="state"
            >
              Estado
            </label>
            <input
              className="appearance-none block w-full border border-grey-lighter rounded py-1 px-2 mb-1"
              id="state"
              type="text"
              name="state"
              placeholder="..."
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="city"
            >
              Cidade
            </label>
            <input
              className="appearance-none block w-full border border-grey-lighter rounded py-1 px-2 mb-1"
              id="city"
              type="text"
              name="city"
              placeholder="..."
            />
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => navigate("/usuarios")}
            className="border-2 bg-purple-500 text-white py-1 w-20 rounded-md hover:bg-transparent hover:text-purple-500 font-semibold"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="border-2 bg-green-500 text-white py-1 w-20 rounded-md hover:bg-transparent hover:text-green-500 font-semibold"
          >
            Salvar
          </button>
        </div>
      </form>
    </main>
  );
};

export default FormUser;
