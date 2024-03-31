import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import { StatusBar } from "expo-status-bar";
import StackRoutes from "./stack.routes";

export default function Routes() {
    return(
        <NavigationContainer>
            <TabRoutes/>
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
}