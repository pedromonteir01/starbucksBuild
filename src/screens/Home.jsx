import { Text, View } from "react-native";
import TouchButton from "../components/TouchButton";

export default function Home() {
    return(
        <View className='items-center justify-center flex p-10'>
            <Text>Olá Mundo!</Text>
            <TouchButton title={'Menu'} route={'MenuStack'}/>
        </View>
    );
}