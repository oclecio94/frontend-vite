import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { authInRequest } from "../../store/modules/auth/actions";
// import { useNavigate } from "react-router-dom";

const FormUser = () => {
  const schema = z.object({
    name: z
      .string("Campo obrigatório!")
      .min(4, "O nome precisa ter pelo menos 4 letras!"),
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
    <form
      onClick={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
    >
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-2 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            {...register("name")}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
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
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email")}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
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
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            {...register("password")}
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
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
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="phone"
          >
            Telefone
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
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
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="addres"
          >
            Endereço
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="addres"
            type="text"
            name="addres"
            placeholder="..."
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="location"
          >
            CEP
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
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
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="number"
          >
            Numero
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="number"
            type="number"
            name="number"
            placeholder="number"
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="state"
          >
            Estado
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="state"
            type="text"
            name="state"
            placeholder="..."
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="city"
          >
            Cidade
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="city"
            type="text"
            name="city"
            placeholder="..."
          />
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <button
          type="submit"
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
  );
};

export default FormUser;
