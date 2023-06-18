import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "./routes";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Toaster />
          <RoutesComponent />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
