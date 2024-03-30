import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//pages
import Home from "../screens/Home";

export default function TabRoutes() {

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    );
}