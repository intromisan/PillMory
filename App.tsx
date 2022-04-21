import { Provider } from "react-redux";
import AppNavigation from "./src/Navigation";

import { store } from "./src/redux/store";
import LoadAssets from "./src/shared/LoadAssets";

const fonts = {
  "Miedinger-Bold": require("./assets/fonts/Miedinger-W01-Bold.otf"),
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
};

export default function App() {
  return (
    <Provider store={store}>
      <LoadAssets fonts={fonts}>
        <AppNavigation />
      </LoadAssets>
    </Provider>
  );
}
