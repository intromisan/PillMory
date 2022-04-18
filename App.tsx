import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import AppNavigation from "./src/Navigation";

import NavigationTabs from "./src/Navigation/NavigationTabs";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
