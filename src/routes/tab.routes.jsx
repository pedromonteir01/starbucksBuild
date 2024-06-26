import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//StackComponent
import StackRoutes from "./stack.routes";

//pages
import Menu from "../screens/Menu";

export default function TabRoutes() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeTab"
                component={StackRoutes}
                options={{
                    tabBarLabel: 'Home',
                    tabBarActiveTintColor: "#131313",
                    tabBarInactiveTintColor: "#D6D6D6",
                }} />
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarActiveTintColor: "#131313",
                    tabBarInactiveTintColor: "#D6D6D6",
                }} />
        </Tab.Navigator>
    );
}