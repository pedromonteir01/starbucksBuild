import { createStackNavigator } from "@react-navigation/stack";

//pages
import Home from "../screens/Home";
import Menu from "../screens/Menu";

export default function StackRoutes() {

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
}