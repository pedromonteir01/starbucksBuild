import { createStackNavigator } from "@react-navigation/stack";

//pages
import Home from "../screens/Home";
import Menu from "../screens/Menu";

export default function StackRoutes() {

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={Home}/>
            <Stack.Screen name="MenuStack" component={Menu}/>
        </Stack.Navigator>
    );
}