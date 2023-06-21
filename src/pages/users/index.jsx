import { useEffect, useState } from "react";
import { HeaderComponent } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { usersInRequest } from "../../store/modules/users/actions";

const Users = () => {
  const [search, setSearch] = useState(null);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(usersInRequest(skip, limit, search));
  }, []);

  return (
    <>
      <HeaderComponent
        title="Usuários"
        placeholder="Digite o nome que deseja buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        route="/usuarios/formulario"
      />
    </>
  );
};

export default Users;
