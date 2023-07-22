import { toast } from "react-hot-toast";
import api from "../../services/api";
import { clientInRequest } from "../../store/modules/clients/actions";

export const createClient = async (data, navigate) => {
  toast.loading("Salvando clientes...");

  try {
    await api.post("/client", data);
    toast.dismiss();
    toast.success("Cliente salvo com sucesso!");
    navigate("/clientes");
  } catch (e) {
    toast.dismiss();
    toast.error("Não foi possível cadastrar o cliente!");
  }
};

export const getById = async (id) => {
  toast.loading("Carregando informações do cliente!");
  try {
    const res = await api.get(`/client/${id}`);
    toast.dismiss();
    return res?.data;
  } catch (e) {
    toast.dismiss();
    toast.error("Não foi possível buscar informações!");
  }
};

export const updateClient = async (id, data, navigate) => {
  toast.loading("Salvando cliente!");

  try {
    await api.put(`/client/${id}`, data);
    toast.dismiss();
    toast.success("Cliente editado com sucesso!");
    navigate("/clientes");
  } catch (e) {
    toast.dismiss();
    toast.error("Não foi possível editar o cliente!");
  }
};

export const removeClient = async (
  id,
  setRemove,
  dispatch,
  skip,
  take,
  search
) => {
  toast.loading("Removendo cliente!");
  try {
    await api.delete(`/client/${id}`);
    toast.dismiss();
    setRemove(false);
    toast.success("Cliente removido com sucesso!");
    dispatch(clientInRequest(skip, take, search));
    return;
  } catch (e) {
    toast.dismiss();
    toast.error("Não foi possível remover o cliente!");
  }
};
