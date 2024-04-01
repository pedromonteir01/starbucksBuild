import { Text, TouchableOpacity, View } from "react-native";
import TouchButton from "../components/TouchButton";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    const navigation = useNavigation();
    return(
        <View className='items-center justify-center flex p-10'>
            <Text>Olá Mundo!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <Text>opaa</Text>
            </TouchableOpacity>
        </View>
    );
}