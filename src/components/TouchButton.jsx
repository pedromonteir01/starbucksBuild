import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";


const TouchButton = ({ title, route, data }) => {

    const navigation = useNavigation();

    return(
        <>
            <TouchableOpacity onPress={() => navigation.navigate(route, {data: data})}> 
                <Text>
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    );
}

export default TouchButton;