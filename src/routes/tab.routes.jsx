import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//pages
import Home from "../screens/Home";

export default function TabRoutes() {

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarActiveTintColor: "#131313",
                    tabBarInactiveTintColor: "#D6D6D6",
                }}/>
        </Tab.Navigator>
    );
}