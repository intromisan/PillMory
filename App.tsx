import { NavigationContainer } from "@react-navigation/native";
import NavigationTabs from "./src/components/Navigation/NavigationTabs";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
}
