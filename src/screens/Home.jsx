import { Image, Text, TouchableOpacity, View } from "react-native";
import TouchButton from "../components/TouchButton";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    const navigation = useNavigation();
    return(
        <View className='items-center justify-center flex p-10'>
            {/* logo */}
            <Image source={require('../../assets/images/logo.png')} className='w-28 h-28'/>
            {/* navigations */}
            <View>
                <TouchButton title={'CARDÁPIO'} route={'Menu'}/>
            </View>
        </View>
    );
}