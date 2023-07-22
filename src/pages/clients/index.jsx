import { useEffect, useState } from "react";
import { HeaderComponent, ModalDelete } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { clientInRequest } from "../../store/modules/clients/actions";
import { Pagination } from "react-bulma-components";
import { useNavigate } from "react-router-dom";
import { removeClient } from "./requests";
import { pagination } from "../../utils/pagination";

const Clients = () => {
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [remove, setRemove] = useState();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.clients);

  useEffect(() => {
    dispatch(clientInRequest(skip, limit, search));
  }, [search, skip, limit]);

  const navigate = useNavigate();

  const alterPage = (page) => {
    pagination(page, setSkip, setPage);
  };

  const deleteUser = () => {
    removeClient(id, setRemove, dispatch, skip, limit, search);
  };

  const clickRemove = (id) => {
    setId(id);
    setRemove(true);
  };

  return (
    <main>
      <HeaderComponent
        title="Clientes"
        placeholder="pesquisar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        route="/clientes/formulario"
      />

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-4">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-5 py-4">
                      Nome
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Telefone
                    </th>

                    <th scope="col" className="px-5 py-4">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {state?.data?.clients?.length && !state.loading
                    ? state.data.clients.map((data, i) => (
                        <tr
                          key={i}
                          className="border-b dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap px-5 py-4 font-medium">
                            {data.name}
                          </td>
                          <td className="whitespace-nowrap px-5 py-4 font-medium">
                            {data.email}
                          </td>
                          <td className="whitespace-nowrap px-5 py-4 font-medium">
                            {data.phone ? data.phone : "--"}
                          </td>

                          <td className="flex whitespace-nowrap px-5 py-4">
                            <a
                              onClick={() => clickRemove(data.id)}
                              className="text-red-600 flex"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                            <a
                              onClick={() =>
                                navigate("/clientes/formulario", {
                                  state: { id: data.id },
                                })
                              }
                              className="text-blue-500 flex"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              <Pagination
                current={page}
                showFirstLast
                showPrevNext={false}
                align="right"
                total={state?.data?.totalPage}
                onChange={(page) => alterPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
      {remove && (
        <ModalDelete
          open={remove}
          close={() => setRemove(false)}
          title="Remover Cliente"
          text="Tem certeza que deseja remover esse cliente?"
          confirm={deleteUser}
        />
      )}
    </main>
  );
};

export default Clients;
