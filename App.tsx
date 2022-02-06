import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import NavigationTabs from "./src/components/Navigation/NavigationTabs";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationTabs />
      </NavigationContainer>
    </Provider>
  );
}
