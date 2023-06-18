import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  return persistReducer(
    {
      key: "curso-dev-ate-a-producao",
      storage,
      whitelist: ["auth", "user"],
    },
    reducers
  );
};
