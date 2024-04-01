import { ScrollView, Text, View } from "react-native";

export default function Menu() {
    return(
        <View className='flex w-full h-full p-12'>
            {/* Cada item */}
            <View>
                <Text>Bebidas</Text>
                <ScrollView>
                    
                </ScrollView>
            </View>
        </View>
    );
}