import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function TabRoutes() {

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen/>
        </Tab.Navigator>
    );
}