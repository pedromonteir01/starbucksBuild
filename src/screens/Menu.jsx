import { ScrollView, Text, View } from "react-native";

//components
import Card from "../components/Card";

const test = [
    {
        id: 1,
        image: '../../assets/images/logo.png',
        name: 'test1',
        price: '19.99'
    },
]

export default function Menu() {
    return(
        <View className='flex w-full h-full p-12'>
            {/* Cada item */}
            <View className='w-full h-28'>
                <Text>Bebidas</Text>
                <ScrollView className='h-full'>
                    {
                        test.map((food) => (
                            <Card name={food.name} photo={food.image} price={food.price} key={food.id}/>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
}