import { toast } from "react-hot-toast";
import api from "../../services/api";
import { usersInRequest } from "../../store/modules/users/actions";

export const createUser = async (data, navigate) => {
  toast.loading("Salvando usuário...");

  try {
    await api.post("/user", data);
    toast.dismiss();
    toast.success("Usuário salvo com sucesso!");
    navigate("/usuarios");
  } catch (e) {
    toast.dismiss();
    toast.error("Não foi possível cadastrar o usuário!");
  }
};

export const getById = async (id) => {
  toast.loading("Carregando informações do usuário!");
  try {
    const res = await api.get(`/user/${id}`);
    toast.dismiss();
    return res?.data;
  } catch (e) {
    toast.dismiss();
    toast.error("Não foi possível buscar informações!");
  }
};

export const updateUser = async (id, data, navigate) => {
  toast.loading("Salvando usuário!");

  try {
    await api.put(`/user/${id}`, data);
    toast.dismiss();
    toast.success("Usuário editado com sucesso!");
    navigate("/usuarios");
  } catch (e) {
    toast.dismiss();
    toast.error("Não foi possível editar o usuário!");
  }
};

export const removeUser = async (
  id,
  setRemove,
  dispatch,
  skip,
  take,
  search
) => {
  toast.loading("Removendo usuário!");
  try {
    await api.delete(`user/${id}`);
    toast.dismiss();
    setRemove(false);
    toast.success("Usuário removido com sucesso!");
    dispatch(usersInRequest(skip, take, search));
    return;
  } catch (e) {
    toast.dismiss();
    toast.error("Não foi possível remover o usuário!");
  }
};
